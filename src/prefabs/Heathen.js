class Heathen extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        scene.add.existing(this);
        this.isConverted = false
        this.crosshair = this.scene.crosshair
    }


    update(){
        if(this.crosshair.x>this.x-this.width/2&&this.crosshair.x<this.x+this.width/2){
            if(this.crosshair.isShooting){
                this.setFrame(1)
                this.isConverted = true
            }
        }
    }
}