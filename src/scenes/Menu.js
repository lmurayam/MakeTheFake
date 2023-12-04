class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    create(){
        console.log("In Menu")
        this.title = this.add.image(0, 0,'title').setOrigin(0,0)
        this.sound.play('sfx_title')

        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keySpace)){
            this.scene.start('playScene');
        }
    }
}