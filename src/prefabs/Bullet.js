class Bullet extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture,angle){
        super(scene,x,y,texture);

        scene.add.existing(this);
        scene.physics.world.enable(this)
        this.body.setAllowGravity(false)
        this.body.setImmovable(true)
        //this.body.setVelocityY(-5)
        this.scene.physics.velocityFromAngle(angle,-50,this.body.velocity)
        console.log(angle)
        console.log(this.body.velocity)
        this.angle = angle -90
    }
    update(){
        if(this.y<0){
            this.destroy()
        }
    }
}