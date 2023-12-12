class Spawner extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        scene.add.existing(this);
        this.heathens = this.scene.heathens
    }

    update(){
        
    }
}