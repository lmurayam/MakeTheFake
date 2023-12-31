class Credit extends Phaser.Scene{
    constructor(){
        super("creditScene");
    }
    create(){
        console.log("In Credit")
        this.title = this.add.image(0, 0,'title').setOrigin(0,0)

        //group text
        this.textGroup = this.add.group()

        this.textGroup.add(this.add.bitmapText(Math.round(width/2),Math.round(height/6),'upheaval','Credits',14,1).setOrigin(0.5).setLetterSpacing(4))
        this.textGroup.add(this.add.bitmapText(Math.round(width/2),Math.round(height/4),'upheaval','THE SIMPSONS',14).setOrigin(0.5).setLetterSpacing(4))
        this.textGroup.add(this.add.bitmapText(Math.round(width/2),Math.round(height/3),'upheaval',' SEASON: 11 EP: 14',14).setOrigin(0.5).setLetterSpacing(4))
        this.textGroup.add(this.add.bitmapText(Math.round(width/2),Math.round(height*5/12),'upheaval','FONT: UPHEAVAL',14).setOrigin(0.5).setLetterSpacing(4))
        this.textGroup.add(this.add.bitmapText(Math.round(width/2),Math.round(height/2),'upheaval','SFX: EXTRACTED',14).setOrigin(0.5).setLetterSpacing(4))
        this.textGroup.add(this.add.bitmapText(Math.round(width/2),Math.round(height*7/12),'upheaval','THE REST: LUKE',14).setOrigin(0.5).setLetterSpacing(4))
        this.textGroup.add(this.add.bitmapText(Math.round(width/2),Math.round(height*9/13),'upheaval','PRESS SPACE',14).setOrigin(0.5).setLetterSpacing(4))

        this.textGroup.getChildren().forEach(text => {
            text.alpha = 0
        });

        //tween for fade in
        this.tweens.add({
            targets: this.textGroup.getChildren(),
            alpha: { from: 0, to: 1},
            duration: 1000,
        });

        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update(){
        musicToggle()
        if(keySpace.isDown){
            this.scene.start('overScene')
            this.sound.play('sfx_hit')
        }
    }
}