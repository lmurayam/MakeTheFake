// load scene from https://github.com/nathanaltice/PaddleParkourP3/blob/master/src/scenes/Load.js
class Load extends Phaser.Scene{
    constructor(){
        super("loadScene");
    }
    preload(){
        console.log("In Load")
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, height/2, width * value, 5);      // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });
        this.load.path = './assets/';
        this.load.image('background','background.png')
        this.load.image('crosshair','crosshair.png')
        this.load.image('border','border.png')
        this.load.image('title','title.png')

        this.load.spritesheet('gun','gun.png', {
            frameWidth: 64,
            frameHeight: 53
        })


    }
    create(){
        this.scene.start('menuScene');
    }
}