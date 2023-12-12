class Control extends Phaser.Scene{
    constructor(){
        super("controlScene");
    }
    create(){
        console.log("In Control")
        this.sky = this.add.tileSprite (0, 0, 300, 144, 'sky').setOrigin(0.5, 0);
        this.sky.x = this.cameras.main.width / 2
        this.background = this.add.image(0, 0,'background').setOrigin(0.5)
        this.background.x = this.cameras.main.width / 2
        this.background.y = this.cameras.main.height / 2
        this.title = this.add.image(0, 0,'title').setOrigin(0,0)

        this.instruction = this.add.bitmapText(Math.round(width/2),Math.round(height*2/6),'upheaval','USE ARROW KEYS\nTO AIM BLASTER\nPRESS SPACE\nTO SHOOT',14,1).setOrigin(0.5).setLetterSpacing(4)
        this.instruction.alpha = 0
        this.spaceText = this.add.bitmapText(Math.round(width/2),Math.round(height*9/13),'upheaval','PRESS SPACE',14).setOrigin(0.5).setLetterSpacing(4)

        this.tweens.add({
            targets: this.instruction,
            alpha: { from: 0, to: 1},
            duration: 1000,
        });


        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.border = this.add.sprite(0, 0,'border').setOrigin(0,0)

        this.tween = this.tweens.add({
            targets: [this.title,this.instruction,this.spaceText],
            alpha: { from: 1, to: 0 },
            duration: 1000,
            completeDelay: 100,
            repeat: 0,
            paused: true,
            onComplete: () => {
                this.scene.start('playScene')
            }
        });
        
        this.gun = this.add.sprite(width/2,height*2,'gun',0).setOrigin(0.5)

        this.gunTween = this.tweens.add({
            targets: [this.gun],
            y: {from: height*2 ,to:height-height/7},
            paused: true,
            duration: 800
        });

    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keySpace)){
            this.gunTween.paused=false
            this.tween.paused=false
        }
    }
}