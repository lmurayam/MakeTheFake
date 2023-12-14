class Bullet extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture,angle){
        super(scene,x,y,texture);

        //add object to scene
        scene.add.existing(this);
        scene.physics.world.enable(this)
        this.body.setAllowGravity(false)
        this.body.setImmovable(true)
        this.setDepth(9)
        
        //set velocity based on angle
        this.scene.physics.velocityFromAngle(angle,-60,this.body.velocity)
        //rotate bullet based on angle
        this.angle = angle -90

        //add collider to heathen
        this.scene.physics.add.collider(this,this.scene.heathens, (bullet,heathen)=>{
            if(heathen.isConverted==false){
                //convert heathen
                this.scene.score += 1
                heathen.setFrame(1)
                heathen.isConverted = true
                this.scene.sound.play('sfx_hit')
                this.particle.setParticleScale(2)
                this.particle.explode(100,this.particle.x,this.particle.y)
            }
            this.particle.emitting = false
            setTimeout(() => {
                this.particle.destroy();
            }, 3000);
            bullet.destroy()
        })
        this.particle = this.scene.add.particles(0, 0, 'redPixel', {
            speed: 50,
            lifespan: { min: 50, max: 500, steps: 10 }
        })
        this.particle.setDepth(8)
        this.particle.startFollow(this,0,0,false)
    }
    update(){
        //delete if too far
        if(this.y<height*5/12){
            this.particle.emitting = false
            setTimeout(() => {
                this.particle.destroy()
            }, 3000);
            this.destroy()
        }

        //as bullet goes farther away, begin to shrink it
        let distance = this.y-height/2
        let scaleFactor = Phaser.Math.Clamp(Math.pow(1.4, distance/height*50), 0, 1);
        this.particle.setParticleScale(2*scaleFactor)
        this.particle.setParticleAlpha(scaleFactor)
        this.setScale(scaleFactor)
        this.alpha=scaleFactor
    }
}