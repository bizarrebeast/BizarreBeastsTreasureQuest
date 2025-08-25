// Function to check if running inside the Farcade iframe environment
export function isFarcadeEnvironment(): boolean {
  try {
    // Check SDK object exists AND we are in an iframe
    return "FarcadeSDK" in window && window.top !== window.self
  } catch (e) {
    // Catch potential cross-origin errors if not in an iframe
    // This check might fail if run locally in a sandboxed iframe
    // but should be reliable in the actual Farcade environment.
    console.warn(
      "Error checking iframe status (this might be expected locally):",
      e
    )
    return false
  }
}

export function initializeFarcadeSDK(game: Phaser.Game): void {
  if (!("FarcadeSDK" in window && window.FarcadeSDK)) {
    console.warn("Farcade SDK not found.")
    return
  }

  // Make the game canvas focusable
  game.canvas.setAttribute("tabindex", "-1")

  // Signal ready state
  window.FarcadeSDK.singlePlayer.actions.ready()

  // Set mute/unmute handler
  window.FarcadeSDK.on("toggle_mute", (data: { isMuted: boolean }) => {
    game.sound.mute = data.isMuted
  })

  // Setup play_again handler
  window.FarcadeSDK.on("play_again", () => {
    // Set flag to indicate this is a replay (skip splash and instructions)
    game.registry.set('isReplay', true)
    
    // Reset game state for new game
    game.registry.set('isDeathRetry', false)
    game.registry.set('isLevelProgression', false)
    game.registry.set('currentLevel', 1)
    game.registry.set('playerLives', 3)
    game.registry.set('totalCoins', 0)
    game.registry.set('accumulatedScore', 0)
    
    // Get the current active scene
    const activeScenes = game.scene.getScenes(true)
    if (activeScenes.length > 0) {
      // Stop all active scenes
      activeScenes.forEach(scene => {
        game.scene.stop(scene.scene.key)
      })
    }
    
    // Start directly at GameScene, skipping splash and instructions
    game.scene.start('GameScene')

    // Attempt to bring focus back to the game canvas
    try {
      game.canvas.focus()
    } catch (e) {
      console.warn("Could not programmatically focus game canvas:", e)
    }
  })
}
