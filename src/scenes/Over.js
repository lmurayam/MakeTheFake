class Over extends Phaser.Scene{
    constructor(){
        super("overScene");
    }
    create(){
        console.log("In Over")
        this.title = this.add.image(0, 0,'title').setOrigin(0,0)

        //group text together
        this.textGroup = this.add.group()

        this.textGroup.add(this.add.bitmapText(Math.round(width/2),Math.round(height/6),'upheaval','HighScore: '+highScore,14,1).setOrigin(0.5).setLetterSpacing(4))
        this.textGroup.add(this.add.bitmapText(Math.round(width/2),Math.round(height/3),'upheaval','PRESS',14).setOrigin(0.5).setLetterSpacing(4))
        this.textGroup.add(this.add.bitmapText(Math.round(width/2),Math.round(height*5/12),'upheaval','R TO RESTART',14).setOrigin(0.5).setLetterSpacing(4))
        this.textGroup.add(this.add.bitmapText(Math.round(width/2),Math.round(height/2),'upheaval','M FOR MENU',14).setOrigin(0.5).setLetterSpacing(4))
        this.textGroup.add(this.add.bitmapText(Math.round(width/2),Math.round(height*7/12),'upheaval','C FOR CREDITS',14).setOrigin(0.5).setLetterSpacing(4))

        this.textGroup.getChildren().forEach(text => {
            text.alpha = 0
        });

        //tween for fade in
        this.tweens.add({
            targets: this.textGroup.getChildren(),
            alpha: { from: 0, to: 1},
            duration: 1000,
        });

        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);  
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);  
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);  

        this.gun = this.add.sprite(width/2,height*2,'gun',0).setOrigin(0.5)

        //tween to remove gun
        this.gunTween = this.tweens.add({
            targets: [this.gun],
            y: {from: height*2 ,to:height-height/7},
            paused: true,
            duration: 800
        });

        
    }
    update(){
        musicToggle()
        //scene transitions
        if(keyR.isDown){
            this.scene.start('playScene')
            this.sound.play('sfx_hit')
        }
        if(keyM.isDown){
            this.scene.start('menuScene')
            this.sound.play('sfx_hit')
        }
        if(keyC.isDown){
            this.scene.start('creditScene')
            this.sound.play('sfx_hit')
        }
    }
}