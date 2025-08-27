import GameSettings from "../config/GameSettings"

export class LoadingScene extends Phaser.Scene {
  constructor() {
    super({ key: "LoadingScene" })
  }

  preload() {
    // LoadingScene now loads NOTHING!
    // 
    // Why? Because:
    // - SplashScene loads its own assets (titleBackground, splash-sound)
    // - InstructionsScene loads its own assets (instruction sprites)
    // - GameScene has AssetPool that loads game sprites on-demand
    // - BackgroundManager loads backgrounds on-demand
    //
    // This makes the initial load nearly instant!
  }

  create() {
    // Immediately transition to splash scene
    // No loading bar needed because there's nothing to load!
    this.scene.start("SplashScene")
  }
}