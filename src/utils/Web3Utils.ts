/**
 * Web3 Integration with Reown AppKit
 * Handles wallet connections and blockchain interactions
 */

import { createAppKit } from '@reown/appkit';
import { mainnet, polygon, arbitrum, base } from '@reown/appkit/networks';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { ethers } from 'ethers';

// Types
export interface Web3Config {
  projectId: string;
  enableAnalytics?: boolean;
  enableOnRamp?: boolean;
  enableSwap?: boolean;
}

export interface ScoreData {
  address: string;
  score: number;
  timestamp: number;
  level: number;
  enemies: number;
  gems: number;
}

/**
 * Web3Manager - Handles all Web3 interactions for dgen1
 */
export class Web3Manager {
  private appKit: any = null;
  private ethersAdapter: any = null;
  private projectId: string;
  private isInitialized: boolean = false;
  private currentAddress: string | null = null;
  private signer: ethers.Signer | null = null;
  private provider: ethers.Provider | null = null;

  constructor(projectId: string) {
    this.projectId = projectId;
  }

  /**
   * Initialize Reown AppKit with ethers adapter
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Create ethers adapter
      this.ethersAdapter = new EthersAdapter();

      // Create the AppKit instance
      this.appKit = createAppKit({
        adapters: [this.ethersAdapter],
        networks: [mainnet, polygon, arbitrum, base],
        projectId: this.projectId,
        metadata: {
          name: 'Bizarre Underground',
          description: 'A retro arcade climbing game with Web3 features',
          url: window.location.origin,
          icons: ['/icon.png']
        },
        features: {
          analytics: true,       // Enable analytics in Reown dashboard
          email: false,          // Disable email login for now
          socials: false,        // Disable social logins for now
          onramp: true,         // Enable crypto on-ramp
          swaps: false          // Disable swaps for game
        },
        themeMode: 'dark',
        themeVariables: {
          '--w3m-color-mix': '#2e2348',  // Match game's purple theme
          '--w3m-color-mix-strength': 40,
          '--w3m-font-family': '"Press Start 2P", monospace',
          '--w3m-border-radius-master': '4px',
          '--w3m-font-size-master': '14px'
        }
      });

      // Set up event listeners
      this.setupEventListeners();
      
      this.isInitialized = true;
      console.log('= Web3Manager initialized with Reown AppKit');

      // Auto-connect if previously connected
      await this.autoConnect();
    } catch (error) {
      console.error('Failed to initialize Web3Manager:', error);
      throw error;
    }
  }

  /**
   * Set up event listeners for wallet events
   */
  private setupEventListeners(): void {
    if (!this.appKit) return;

    // Listen for account changes
    this.appKit.subscribeState((state: any) => {
      if (state.address !== this.currentAddress) {
        this.currentAddress = state.address || null;
        this.onAccountChanged(this.currentAddress);
      }
    });
  }

  /**
   * Handle account changes
   */
  private onAccountChanged(address: string | null): void {
    console.log('=[ Account changed:', address);
    
    // Save to localStorage
    if (address) {
      localStorage.setItem('bz_wallet', address);
      localStorage.setItem('bz_lastConnected', Date.now().toString());
    } else {
      localStorage.removeItem('bz_wallet');
    }

    // Dispatch custom event for game to handle
    window.dispatchEvent(new CustomEvent('walletChanged', { 
      detail: { address } 
    }));
  }

  /**
   * Auto-connect if user was previously connected
   */
  private async autoConnect(): Promise<void> {
    const lastConnected = localStorage.getItem('bz_lastConnected');
    if (!lastConnected) return;

    // Only auto-connect if connected in last 7 days
    const daysSinceConnect = (Date.now() - parseInt(lastConnected)) / (1000 * 60 * 60 * 24);
    if (daysSinceConnect > 7) {
      localStorage.removeItem('bz_wallet');
      localStorage.removeItem('bz_lastConnected');
      return;
    }

    try {
      const state = this.appKit.getState();
      if (state.isConnected) {
        this.currentAddress = state.address;
        console.log(' Auto-connected to wallet:', this.currentAddress);
      }
    } catch (error) {
      console.log('Auto-connect skipped');
    }
  }

  /**
   * Open wallet connection modal
   */
  async connect(): Promise<string | null> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      // Open the Reown modal
      await this.appKit.open();
      
      // Wait for connection (modal handles everything)
      return new Promise((resolve) => {
        const checkConnection = setInterval(() => {
          const state = this.appKit.getState();
          if (state.isConnected) {
            clearInterval(checkConnection);
            this.currentAddress = state.address;
            resolve(this.currentAddress);
          }
        }, 500);

        // Timeout after 60 seconds
        setTimeout(() => {
          clearInterval(checkConnection);
          resolve(null);
        }, 60000);
      });
    } catch (error) {
      console.error('Connection failed:', error);
      return null;
    }
  }

  /**
   * Disconnect wallet
   */
  async disconnect(): Promise<void> {
    if (!this.appKit) return;

    try {
      await this.appKit.disconnect();
      this.currentAddress = null;
      this.signer = null;
      this.provider = null;
      localStorage.removeItem('bz_wallet');
      localStorage.removeItem('bz_lastConnected');
      console.log('=K Wallet disconnected');
    } catch (error) {
      console.error('Disconnect failed:', error);
    }
  }

  /**
   * Get current connected address
   */
  getAddress(): string | null {
    return this.currentAddress;
  }

  /**
   * Check if wallet is connected
   */
  isConnected(): boolean {
    if (!this.appKit) return false;
    const state = this.appKit.getState();
    return state.isConnected && !!this.currentAddress;
  }

  /**
   * Get ethers signer for transactions
   */
  async getSigner(): Promise<ethers.Signer | null> {
    if (!this.isConnected()) return null;

    try {
      const provider = await this.ethersAdapter.getProvider();
      this.provider = provider;
      this.signer = await provider.getSigner();
      return this.signer;
    } catch (error) {
      console.error('Failed to get signer:', error);
      return null;
    }
  }

  /**
   * Save score on-chain (placeholder for smart contract integration)
   */
  async saveScoreOnChain(scoreData: ScoreData): Promise<string | null> {
    if (!this.isConnected()) {
      console.log('L Cannot save score: wallet not connected');
      return null;
    }

    try {
      const signer = await this.getSigner();
      if (!signer) return null;

      // TODO: Replace with actual smart contract address and ABI
      const CONTRACT_ADDRESS = '0x...'; // Your contract address
      const CONTRACT_ABI = []; // Your contract ABI

      console.log('=� Would save score on-chain:', scoreData);
      
      // Example contract interaction (uncomment when contract is deployed):
      /*
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const tx = await contract.submitScore(
        scoreData.score,
        scoreData.level,
        scoreData.enemies,
        scoreData.gems
      );
      await tx.wait();
      return tx.hash;
      */

      // For now, just save to localStorage with wallet address
      const walletScores = JSON.parse(
        localStorage.getItem('bz_walletScores') || '{}'
      );
      
      if (!walletScores[this.currentAddress!]) {
        walletScores[this.currentAddress!] = [];
      }
      
      walletScores[this.currentAddress!].push(scoreData);
      walletScores[this.currentAddress!].sort((a: ScoreData, b: ScoreData) => b.score - a.score);
      walletScores[this.currentAddress!] = walletScores[this.currentAddress!].slice(0, 10);
      
      localStorage.setItem('bz_walletScores', JSON.stringify(walletScores));
      
      return 'local_save_' + Date.now();
    } catch (error) {
      console.error('Failed to save score on-chain:', error);
      return null;
    }
  }

  /**
   * Get leaderboard data
   */
  async getLeaderboard(limit: number = 10): Promise<ScoreData[]> {
    // TODO: Fetch from smart contract or backend
    
    // For now, return local leaderboard
    const walletScores = JSON.parse(
      localStorage.getItem('bz_walletScores') || '{}'
    );
    
    const allScores: ScoreData[] = [];
    for (const wallet in walletScores) {
      allScores.push(...walletScores[wallet]);
    }
    
    return allScores
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  /**
   * Show account modal (for viewing account details)
   */
  async showAccount(): Promise<void> {
    if (!this.appKit || !this.isConnected()) return;
    await this.appKit.open({ view: 'Account' });
  }

  /**
   * Get network information
   */
  getNetwork(): any {
    if (!this.appKit) return null;
    const state = this.appKit.getState();
    return state.selectedNetworkId;
  }

  /**
   * Format address for display
   */
  static formatAddress(address: string): string {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  /**
   * Create a singleton instance
   */
  private static instance: Web3Manager | null = null;

  static getInstance(projectId?: string): Web3Manager {
    if (!Web3Manager.instance) {
      if (!projectId) {
        throw new Error('Project ID required for first initialization');
      }
      Web3Manager.instance = new Web3Manager(projectId);
    }
    return Web3Manager.instance;
  }
}

// Export singleton getter
export const getWeb3Manager = (projectId?: string) => Web3Manager.getInstance(projectId);