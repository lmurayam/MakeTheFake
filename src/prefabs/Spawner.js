class Spawner extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture,direction){
        super(scene,x,y,texture);
        //add object to scene
        scene.add.existing(this);
        //get heathen group from scene
        this.heathens = this.scene.heathens
        this.direction = direction

        this.randomSpawn()
        this.gameOver=false
    }

    //repeated spawn a heathen after x amount of random time within a range
    randomSpawn(){
        let randomTime = Phaser.Math.Between(1500,5000)
        let randomY = Phaser.Math.Between(-2,2)*2
        setTimeout(()=>{
            if(!this.gameOver){
                let heathen = new Heathen(this.scene, this.x, this.y+randomY,'heathen',speed*this.direction).setOrigin(0.5).setDepth(4+randomY)
                this.heathens.add(heathen)
                this.randomSpawn()
            }
        },randomTime)
    }
}