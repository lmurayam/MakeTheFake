class Spawner extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture,direction){
        super(scene,x,y,texture);
        scene.add.existing(this);
        this.heathens = this.scene.heathens
        this.direction = direction

        this.randomSpawn()
        this.gameOver=false
    }

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