/**
 * Level Manager for Bizarre Underground
 * Handles discrete level progression (1-50) with BEAST MODE infinite play (51+)
 */

import { EnemySpawningSystem, EnemyType } from './EnemySpawningSystem'

export interface LevelConfig {
  levelNumber: number
  floorCount: number
  enemyTypes: string[]
  collectibleTypes: string[]
  worldWidth: number // in tiles
  isEndless: boolean
  // New properties for difficulty-based spawning
  difficultyBudgetPerFloor: number
  enemySpawnWeights: { [key: string]: number }
}

export class LevelManager {
  private currentLevel: number = 1
  private readonly BEAST_MODE_LEVEL = 51
  private readonly MAX_PROGRESSION_LEVEL = 50
  constructor() {
    // Always start from Level 1 - we'll track furthest level reached separately
    this.currentLevel = 1
  }
  
  /**
   * Get configuration for a specific level
   */
  getLevelConfig(levelNumber: number): LevelConfig {
    const isBeastMode = levelNumber >= this.BEAST_MODE_LEVEL
    
    // For BEAST MODE (51+), use level 50's difficulty configuration
    const configLevel = Math.min(levelNumber, this.MAX_PROGRESSION_LEVEL)
    const weights = EnemySpawningSystem.getSpawnWeights(configLevel)
    
    return {
      levelNumber,
      floorCount: this.calculateFloorCount(levelNumber),
      enemyTypes: this.getEnemyTypes(configLevel), // Keep for backward compatibility
      collectibleTypes: this.getCollectibleTypes(configLevel),
      worldWidth: this.getWorldWidth(configLevel),
      isEndless: isBeastMode,
      // New difficulty-based properties - cap at level 50 difficulty
      difficultyBudgetPerFloor: EnemySpawningSystem.getDifficultyBudget(configLevel, 1), // Base budget
      enemySpawnWeights: weights
    }
  }
  
  /**
   * Calculate number of floors for a level
   * Levels 1-10: Tutorial phase (10-12 floors)
   * Levels 11-25: Skill building (13-18 floors)
   * Levels 26-40: Challenge ramp (19-25 floors)
   * Levels 41-50: Master phase (25-30 floors)
   * Levels 51+: BEAST MODE (infinite floors, using level 50's floor count for display)
   */
  private calculateFloorCount(levelNumber: number): number {
    if (levelNumber >= this.BEAST_MODE_LEVEL) {
      return -1 // Infinite floors for BEAST MODE
    }
    
    // Implement the refined difficulty scaling structure
    if (levelNumber <= 10) {
      // Tutorial phase: 10-12 floors
      return 10 + Math.floor(levelNumber / 5) // 10-12 floors
    } else if (levelNumber <= 25) {
      // Skill building: 13-18 floors  
      const progress = (levelNumber - 10) / 15 // 0-1 progress through this phase
      return 13 + Math.floor(progress * 5) // 13-18 floors
    } else if (levelNumber <= 40) {
      // Challenge ramp: 19-25 floors
      const progress = (levelNumber - 25) / 15 // 0-1 progress through this phase
      return 19 + Math.floor(progress * 6) // 19-25 floors
    } else {
      // Master phase (41-50): 25-30 floors
      const progress = (levelNumber - 40) / 10 // 0-1 progress through this phase
      return 25 + Math.floor(progress * 5) // 25-30 floors
    }
  }
  
  /**
   * Determine which enemy types are available at this level
   * Now returns all enemy types since we use weighted spawning instead of restrictions
   * Kept for backward compatibility with existing spawning code
   */
  private getEnemyTypes(levelNumber: number): string[] {
    // With the new weighted spawning system, all enemy types are available
    // but with different spawn probabilities based on level
    return ['blue', 'yellow', 'green', 'red']
  }

  /**
   * Get enemy types to spawn for a specific floor using the new difficulty system
   */
  getEnemyTypesForFloor(levelNumber: number, floorNumber: number): EnemyType[] {
    // Cap difficulty at level 50 for BEAST MODE
    const configLevel = Math.min(levelNumber, this.MAX_PROGRESSION_LEVEL)
    
    const budget = EnemySpawningSystem.getDifficultyBudget(configLevel, floorNumber)
    const selectedEnemies = EnemySpawningSystem.selectEnemies(budget, configLevel)
    
    return selectedEnemies
  }
  
  /**
   * Determine which collectibles are available at this level
   * Level 1-2: Regular coins only
   * Level 3: Regular coins + Blue coins
   * Level 4-6: Regular coins + Blue coins + Diamonds + Free lives + Invincibility pendants
   * Level 7+: All collectibles (+ Treasure chests)
   */
  private getCollectibleTypes(levelNumber: number): string[] {
    if (levelNumber <= 2) {
      return ['coin', 'treasureChest', 'invincibilityPendant']  // Add pendants for testing
    } else if (levelNumber <= 3) {
      return ['coin', 'blueCoin', 'treasureChest', 'invincibilityPendant']  // Add pendants for testing
    } else if (levelNumber <= 6) {
      return ['coin', 'blueCoin', 'diamond', 'freeLife', 'invincibilityPendant', 'treasureChest']  // Add treasure chests for testing
    } else {
      return ['coin', 'blueCoin', 'diamond', 'freeLife', 'invincibilityPendant', 'treasureChest']
    }
  }
  
  /**
   * Determine world width for this level
   * Levels 1-24: 24 tiles wide
   * Levels 25-49: 32 tiles wide
   * Levels 50+: 40 tiles wide
   */
  private getWorldWidth(levelNumber: number): number {
    if (levelNumber < 25) {
      return 24
    } else if (levelNumber < 50) {
      return 32
    } else {
      return 40
    }
  }
  
  /**
   * Check if player has completed the current level
   */
  isLevelComplete(currentFloor: number): boolean {
    const config = this.getLevelConfig(this.currentLevel)
    
    // BEAST MODE (51+) never completes
    if (config.isEndless) {
      return false
    }
    
    // Regular levels (1-50) complete when reaching the top floor
    return currentFloor >= config.floorCount
  }
  
  /**
   * Advance to the next level
   */
  nextLevel(): number {
    this.currentLevel++
    this.saveProgress()
    return this.currentLevel
  }
  
  /**
   * Reset to level 1 (on death)
   */
  resetToStart(): void {
    this.currentLevel = 1
    // Don't save this - we want to preserve their furthest progress
  }
  
  /**
   * Get the current level number
   */
  getCurrentLevel(): number {
    return this.currentLevel
  }
  
  /**
   * Set the current level (for testing or level select)
   */
  setCurrentLevel(level: number): void {
    this.currentLevel = level
    this.saveProgress()
  }
  
  /**
   * Save progress to local storage
   */
  private saveProgress(): void {
    try {
      // Only track furthest level reached, don't save current level
      // (we always want to restart from Level 1)
      const furthestLevel = parseInt(localStorage.getItem('bizarreUnderground_furthestLevel') || '1')
      if (this.currentLevel > furthestLevel) {
        localStorage.setItem('bizarreUnderground_furthestLevel', this.currentLevel.toString())
      }
    } catch (e) {
      console.warn('Could not save progress to localStorage:', e)
    }
  }
  
  /**
   * Load progress from local storage
   * Note: We don't restore current level anymore - always start from Level 1
   */
  private loadProgress(): void {
    // No longer needed - we always start from Level 1
    // Only track furthest level reached for statistics
  }
  
  /**
   * Get furthest level ever reached
   */
  getFurthestLevel(): number {
    try {
      return parseInt(localStorage.getItem('bizarreUnderground_furthestLevel') || '1')
    } catch (e) {
      return 1
    }
  }
  
  /**
   * Get spawn rates for enemies based on level (legacy method - use EnemySpawningSystem instead)
   * @deprecated Use EnemySpawningSystem.selectEnemies() for new difficulty-based spawning
   */
  getEnemySpawnRates(levelNumber: number): { [key: string]: number } {
    const baseRates = {
      blue: 1.2,   // Increased BaseBlu frequency
      yellow: 0.8, // Slightly increased caterpillar frequency
      green: 0.5,  // Moderate jumper frequency
      red: 0.3     // Controlled red enemy frequency
    }
    
    // Cap difficulty scaling at level 50 for BEAST MODE
    const configLevel = Math.min(levelNumber, this.MAX_PROGRESSION_LEVEL)
    
    // More gradual increase in spawn rates
    const difficultyMultiplier = 1 + (configLevel * 0.015) // Max 1.75x at level 50
    
    const rates: { [key: string]: number } = {}
    const availableEnemies = this.getEnemyTypes(configLevel)
    
    availableEnemies.forEach(enemy => {
      rates[enemy] = baseRates[enemy] * difficultyMultiplier
    })
    
    return rates
  }

  /**
   * Check if current level is BEAST MODE
   */
  isBeastMode(): boolean {
    return this.currentLevel >= this.BEAST_MODE_LEVEL
  }

  /**
   * Get the maximum progression level (before BEAST MODE)
   */
  getMaxProgressionLevel(): number {
    return this.MAX_PROGRESSION_LEVEL
  }
}

export default LevelManager