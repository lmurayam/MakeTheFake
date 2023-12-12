class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    create(){
        console.log("In Menu")
        this.title = this.add.image(0, 0,'title').setOrigin(0,0)
        this.sound.play('sfx_title')

        this.billyText = this.add.bitmapText(Math.round(width/2),Math.round(height/6),'upheaval','BILLY GRAHAM\'S',14).setOrigin(0.5).setLetterSpacing(3)

        this.bibleText = this.add.bitmapText(Math.round(width/2),Math.round(height/3),'upheavalColor','BIBLE',28).setOrigin(0.5).setLetterSpacing(2)
        this.blasterText = this.add.bitmapText(Math.round(width/2),Math.round(height/2),'upheavalColor','BLASTERS',28).setOrigin(0.5).setLetterSpacing(2)

        this.add.bitmapText(Math.round(width/2),Math.round(height*9/13),'upheaval','PRESS SPACE',14).setOrigin(0.5).setLetterSpacing(4)

        this.tween = this.tweens.add({
            targets: [this.billyText,this.bibleText,this.blasterText,this.spaceText],
            alpha: { from: 1, to: 0 },
            duration: 500,
            completeDelay: 100,
            repeat: 0,
            paused: true,
            onComplete: () => {
                this.scene.start('controlScene')
            }
        });

        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keySpace)){
            this.tween.paused = false
        }
    }
}