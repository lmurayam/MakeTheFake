let config = {
    parent: 'gameCanvas',
    type: Phaser.AUTO,
    height: 144,
    width: 192,
    render: { pixelArt: true, antialias: false },
    zoom: 5,
    physics:{
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 600
            }
        }
    },
    scene: [Load, Menu, Play],
}

let game = new Phaser.Game(config)

let { width, height } = game.config
let keySpace, keyLeft, keyRight
let speed = 100
let bounds = Math.round(width*(1/5))+1
let levelWidth,levelHeight

function html_input(scene){
    let debug = document.getElementById('debugToggle');
    debug.addEventListener('input', function(){
        //https://phaser.discourse.group/t/turn-on-off-debug-at-runtime/3681/2
        if(this.checked){
            scene.physics.world.drawDebug = true;      
        }
        else{
            scene.physics.world.drawDebug = false;
            scene.physics.world.debugGraphic.clear();
        }
    });
}