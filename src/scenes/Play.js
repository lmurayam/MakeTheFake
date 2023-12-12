class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    create(){
        this.physics.world.drawDebug = false;
        console.log("In Play")
        this.sky = this.add.tileSprite(0, 0, 300, 144, 'sky').setOrigin(0, 0);
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

        this.title = this.add.image(0, 0,'title').setOrigin(0,0)
        this.title.setScrollFactor(0)
        this.title.setDepth(9)
        this.title.alpha=0


        this.border = this.add.sprite(0, 0,'border').setOrigin(0,0)
        this.border.setScrollFactor(0)
        this.border.setDepth(10)

        this.score = 0
        this.gameOver = false

        this.heathens = this.add.group()

        

        this.timeElapsed = 0
        this.timeLimit = 60
        this.timeText = this.add.bitmapText(Math.round(width*4/5),Math.round(height*4/5),'upheaval',this.timeLimit,14,1).setOrigin(0.5).setLetterSpacing(4)
        this.timeText.setScrollFactor(0)
        this.time.addEvent({
            delay:1000,
            callback: function(){
                if(this.gameOver == false){
                    this.timeElapsed += 1
                    this.timeText.text = this.timeLimit - this.timeElapsed
                    if(this.timeElapsed%4==0){
                        this.sky.tilePositionX += 1
                    }
                }
                if(this.timeLimit-this.timeElapsed==0){
                    this.gameOver = true
                }
            },
            callbackScope: this,
            loop: true,
        })

        let heathen = new Heathen(this, width/2, height*11/25,'heathen',speed).setOrigin(0.5)
        this.heathens.add(heathen)
        //Phaser.Math.Between(bounds,levelWidth-bounds,10)

        this.tween = this.tweens.add({
            targets: [this.title],
            alpha: { from: .2, to: 1},
            duration: 800,
            repeat: 0,
            paused: true,
            onComplete: () => {
                this.scene.start('overScene')
            }
        });

        this.gunTween = this.tweens.add({
            targets: [this.crosshair.gun],
            y: {from: height-height/7,to:height*2 },
            paused: true,
            duration: 800
        });
    }

    update(){
        html_input(this)
        if (!this.gameOver){
            this.crosshair.update()
            this.heathens.getChildren().forEach(heathen => {
                heathen.update()
            });
        }
        if(keyR.isDown){
            this.gunTween.paused = false
            this.tween.paused=false
        }
        if (this.gameOver){
            this.gunTween.paused = false
            this.tween.paused=false
        }
    }
}