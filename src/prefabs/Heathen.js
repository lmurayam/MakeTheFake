class Heathen extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture,speed){
        super(scene,x,y,texture);

        //add object to scene and set up state variables
        scene.add.existing(this);
        scene.physics.world.enable(this)
        this.body.setAllowGravity(false)
        this.body.setImmovable(true)
        this.isConverted = false
        this.body.setSize(this.width,this.height/2,true)
        this.setOffset(0,0)
        this.body.setVelocityX(speed)
        this.speed = speed

        //change orientation based on velocity
        if(this.speed<0){
            this.flipX=true
        }
    }


    update(){
        //delete once leaving bounds
        if((this.x<0-this.width/2&&this.speed<0)||(this.x>levelWidth+this.width/2&&this.speed>0)){
            this.destroy()
        }
    }
}