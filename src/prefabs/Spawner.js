class Spawner extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture,direction){
        super(scene,x,y,texture);
        scene.add.existing(this);
        this.heathens = this.scene.heathens
        this.direction = direction

        let heathen = new Heathen(this.scene, this.x+(20*direction), this.y,'heathen',speed*this.direction).setOrigin(0.5)
        this.heathens.add(heathen)
        this.randomSpawn()
        this.gameOver=false
    }

    randomSpawn(){
        let randomTime = Phaser.Math.Between(1500,5000)
        setTimeout(()=>{
            if(!this.gameOver){
                let heathen = new Heathen(this.scene, this.x, this.y,'heathen',speed*this.direction).setOrigin(0.5)
                this.heathens.add(heathen)
                this.randomSpawn()
            }
        },randomTime)
    }
}