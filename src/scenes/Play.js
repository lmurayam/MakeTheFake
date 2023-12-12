class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    create(){
        this.physics.world.drawDebug = false;
        console.log("In Play")
        this.background = this.add.image(0, 0,'background').setOrigin(0,0)
        levelWidth = this.background.width
        levelHeight = this.background.height
        this.crosshair = new Crosshair(this, levelWidth/2, height*11/25,'crosshair').setOrigin(0.5)
        this.crosshair.setDepth(2)

        this.cameras.main.setBounds(0,0,levelWidth,levelHeight)
        this.cameras.main.startFollow(this.crosshair,false)
        this.cameras.main.setDeadzone(((width/2)+bounds/2)+1)

        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);  
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);  


        this.border = this.add.sprite(0, 0,'border').setOrigin(0,0)
        this.border.setScrollFactor(0)
        this.border.setDepth(10)
        
        this.gameOver = false

        this.previousHeathen = null
        this.newHeathen = null
    }

    update(){
        html_input(this)
        if (!this.gameOver){
            this.crosshair.update()
            if (this.previousHeathen==null||this.previousHeathen.isConverted==true){
                this.newHeathen = new Heathen(this, Phaser.Math.Between(bounds,levelWidth-bounds), height*11/25,'heathen').setOrigin(0.5)
                this.newHeathen.setDepth(1)
                this.previousHeathen = this.newHeathen
            }
            this.newHeathen.update()
        }
        if(keyR.isDown){
            this.scene.start('menuScene');
        }
    }
}