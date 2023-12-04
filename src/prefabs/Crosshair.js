class Crosshair extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        scene.add.existing(this);
    }


    update(){
        if(keyLeft.isDown&&this.x>bounds){
            this.x -= 1
        }
        else if(keyRight.isDown&this.x<levelWidth-bounds){
            this.x += 1
        }
    }
}