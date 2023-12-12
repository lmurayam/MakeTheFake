class Heathen extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        scene.add.existing(this);
        scene.physics.world.enable(this)
        this.body.setAllowGravity(false)
        this.body.setImmovable(true)
        this.isConverted = false
        this.body.setSize(this.width,this.height/2,true)
        this.setOffset(0,0)
    }


    update(){
        
    }
}