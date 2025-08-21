export class InvincibilityPendant {
  public sprite: Phaser.GameObjects.Container
  private pendantSprite: Phaser.GameObjects.Image
  private scene: Phaser.Scene
  private collected: boolean = false
  private sparkleTimer?: Phaser.Time.TimerEvent
  private aura: Phaser.GameObjects.Arc | null = null
  private particles: Phaser.GameObjects.Graphics[] = []
  
  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.scene = scene
    
    // Move up by 5 pixels for better eye level positioning
    const adjustedY = y - 5
    
    // Create container for pendant sprite
    this.sprite = scene.add.container(x, adjustedY)
    
    // Create pendant sprite from URL
    this.pendantSprite = scene.add.image(0, 0, 'invincibility-pendant')
    
    // Set size same as diamond (29x29)
    this.pendantSprite.setDisplaySize(29, 29)
    
    this.sprite.add(this.pendantSprite)
    this.sprite.setDepth(13)
    
    // Add physics to the container
    scene.physics.add.existing(this.sprite, true) // Static body
    
    // Set hitbox size to match diamond size
    if (this.sprite.body) {
      const body = this.sprite.body as Phaser.Physics.Arcade.Body
      body.setSize(29, 29)
      // Container physics bodies need offset adjustment
      body.setOffset(-14.5, -14.5) // Center the hitbox on the container (29/2 = 14.5)
    }
    
    // Add gentle floating motion to container (same as diamond)
    scene.tweens.add({
      targets: this.sprite,
      y: adjustedY - 5,
      duration: 1500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    })
    
    // Add pulsing animation to container (more dramatic for power-up)
    scene.tweens.add({
      targets: this.sprite,
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    })
    
    // Create golden aura
    this.createGoldenAura(x, adjustedY)
    
    // Add sparkle effect (golden sparkles for power-up)
    this.sparkleTimer = scene.time.addEvent({
      delay: 300 + Math.random() * 200,
      callback: () => this.createSparkle(),
      loop: true
    })
    
    // Create floating particles
    this.createFloatingParticles(x, adjustedY)
  }
  
  private createGoldenAura(x: number, y: number): void {
    // Create golden glow aura
    this.aura = this.scene.add.circle(x, y, 25, 0xffd700)
    this.aura.setAlpha(0.2)
    this.aura.setDepth(12)
    
    // Pulsing golden glow
    this.scene.tweens.add({
      targets: this.aura,
      scaleX: 1.3,
      scaleY: 1.3,
      alpha: 0.4,
      duration: 1000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    })
  }
  
  private createFloatingParticles(x: number, y: number): void {
    // Create small golden particles floating around
    for (let i = 0; i < 6; i++) {
      const particle = this.scene.add.graphics()
      particle.setDepth(14)
      
      // Draw small golden circle
      particle.fillStyle(0xffd700, 0.8)
      particle.fillCircle(0, 0, 2)
      
      // Position around pendant
      const angle = (Math.PI * 2 / 6) * i
      const radius = 20
      particle.setPosition(
        x + Math.cos(angle) * radius,
        y + Math.sin(angle) * radius
      )
      
      this.particles.push(particle)
      
      // Orbital motion
      this.scene.tweens.add({
        targets: particle,
        rotation: Math.PI * 2,
        duration: 3000,
        repeat: -1,
        ease: 'Linear'
      })
      
      // Gentle floating
      this.scene.tweens.add({
        targets: particle,
        y: particle.y - 8,
        duration: 1500 + Math.random() * 500,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
      })
      
      // Twinkling effect
      this.scene.tweens.add({
        targets: particle,
        alpha: 0.3,
        duration: 800 + Math.random() * 400,
        yoyo: true,
        repeat: -1,
        ease: 'Power2.easeInOut'
      })
    }
  }
  
  private createSparkle(): void {
    if (!this.sprite || !this.sprite.scene) return
    
    const sparkle = this.scene.add.graphics()
    const sparkleX = (Math.random() - 0.5) * 35
    const sparkleY = (Math.random() - 0.5) * 35
    
    // Create star-shaped sparkle with golden color
    sparkle.fillStyle(0xffd700, 0.9)
    sparkle.beginPath()
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const radius = i % 2 === 0 ? 3 : 1.5
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      if (i === 0) sparkle.moveTo(x, y)
      else sparkle.lineTo(x, y)
    }
    sparkle.closePath()
    sparkle.fillPath()
    
    const sparkleContainer = this.scene.add.container(this.sprite.x + sparkleX, this.sprite.y + sparkleY)
    sparkleContainer.add(sparkle)
    sparkleContainer.setDepth(15)
    
    this.scene.tweens.add({
      targets: sparkleContainer,
      scaleX: 2,
      scaleY: 2,
      alpha: 0,
      rotation: Math.PI,
      duration: 600,
      ease: 'Power2',
      onComplete: () => {
        sparkleContainer.destroy()
      }
    })
  }
  
  isCollected(): boolean {
    return this.collected
  }
  
  collect(): void {
    if (this.collected) return
    this.collected = true
    
    // Stop sparkle timer
    if (this.sparkleTimer) {
      this.sparkleTimer.destroy()
    }
    
    // Immediately disable physics to prevent further collisions
    if (this.sprite.body) {
      this.sprite.body.enable = false
    }
    
    // Pendant collection animation with brilliant golden flash
    this.scene.tweens.add({
      targets: this.sprite,
      scaleX: 3,
      scaleY: 3,
      alpha: 0,
      duration: 500,
      ease: 'Back.easeOut',
      onComplete: () => {
        this.sprite.destroy()
      }
    })
    
    // Create collection burst effect
    this.createCollectionBurst()
  }
  
  private createCollectionBurst(): void {
    // Create burst of golden particles
    for (let i = 0; i < 20; i++) {
      const particle = this.scene.add.circle(
        this.sprite.x + (Math.random() - 0.5) * 15,
        this.sprite.y - 10,
        Math.random() * 4 + 2,
        0xffd700
      )
      particle.setDepth(50)
      
      const angle = (Math.PI * 2 / 20) * i + (Math.random() - 0.5) * 0.8
      const speed = Math.random() * 120 + 80
      
      this.scene.tweens.add({
        targets: particle,
        x: particle.x + Math.cos(angle) * speed,
        y: particle.y + Math.sin(angle) * speed - 40,
        alpha: 0,
        scaleX: 0.1,
        scaleY: 0.1,
        duration: 1200,
        ease: 'Power2.easeOut',
        onComplete: () => particle.destroy()
      })
    }
    
    // Flash effect
    const flash = this.scene.add.circle(this.sprite.x, this.sprite.y, 50, 0xffd700)
    flash.setDepth(49)
    flash.setAlpha(0.9)
    
    this.scene.tweens.add({
      targets: flash,
      scaleX: 2.5,
      scaleY: 2.5,
      alpha: 0,
      duration: 400,
      ease: 'Power2.easeOut',
      onComplete: () => flash.destroy()
    })
  }
  
  destroy(): void {
    if (this.sparkleTimer) {
      this.sparkleTimer.destroy()
    }
    if (this.aura) {
      this.aura.destroy()
    }
    this.particles.forEach(particle => particle.destroy())
    this.sprite.destroy()
  }
}