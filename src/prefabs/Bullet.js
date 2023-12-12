class Bullet extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture,angle){
        super(scene,x,y,texture);

        scene.add.existing(this);
        scene.physics.world.enable(this)
        this.body.setAllowGravity(false)
        this.body.setImmovable(true)
        this.setDepth(2)
        //this.body.setVelocityY(-5)
        this.scene.physics.velocityFromAngle(angle,-60,this.body.velocity)
        console.log(angle)
        console.log(this.body.velocity)
        this.angle = angle -90
        this.scene.physics.add.collider(this,this.scene.newHeathen, (bullet,heathen)=>{
            heathen.setFrame(1)
            heathen.isConverted = true
            bullet.destroy()
        })
    }
    update(){
        if(this.y<height/3){
            this.destroy()
        }
        let distance = this.y-height/2
        if(this.y<height){
            let scaleFactor = Phaser.Math.Clamp(Math.pow(1.4, distance/height*50), 0, 1);
            console.log(scaleFactor)
            this.setScale(scaleFactor)
        }
    }
}