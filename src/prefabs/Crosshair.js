class Crosshair extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        scene.add.existing(this);
        this.isShooting = false
    }


    update(){
        if(keyLeft.isDown&&this.x>bounds){
            this.x -= 1
        }
        else if(keyRight.isDown&&this.x<levelWidth-bounds){
            this.x += 1
        }
        if(keySpace.isDown&&this.isShooting==false){
            this.isShooting=true
            this.scene.sound.play('sfx_blast')
        }
        if(keySpace.isUp){
            this.isShooting=false
        }
    }
}