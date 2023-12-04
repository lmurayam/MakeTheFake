class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    create(){
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

        this.border = this.add.sprite(0, 0,'border').setOrigin(0,0)
        this.border.setScrollFactor(0)
        this.border.setDepth(10)
        this.gun = this.add.sprite(width/2,height-height/7,'gun',3).setOrigin(0.5)
        this.gun.setScrollFactor(0)
        this.gun.setDepth(11)
        
        this.gameOver = false



        this.previousHeathen = null
        this.newHeathen = null
    }

    calculateAngle(x1, y1, x2, y2) {
        const angleRadians = Math.atan2(y2 - y1, x2 - x1);
        let angleDegrees = (angleRadians * 180) / Math.PI;

        if (angleDegrees < 0) {
            angleDegrees += 360;
        }
    
        return angleDegrees;
    }
    calculateCrosshairAngle(){
        return Math.round(this.calculateAngle(this.crosshair.x,this.crosshair.y,this.cameras.main.midPoint.x,height*17/20)-90)
    }
    gunAngle(){
        let angle = this.calculateCrosshairAngle()
        if (angle == -45){
            this.gun.setFrame(0)
        }
        else if (angle>-45 && angle<=-30){
            this.gun.setFrame(1)
        }
        else if (angle>-30 && angle<=-15){
            this.gun.setFrame(2)
        }
        else if (angle>15 && angle<30){
            this.gun.setFrame(4)
        }
        else if (angle>=30 && angle<45){
            this.gun.setFrame(5)
        }
        else if (angle == 45){
            this.gun.setFrame(6)
        }
        else{
            this.gun.setFrame(3)
        }
    }
    update(){
        if (!this.gameOver){
            this.crosshair.update()
            this.gunAngle()
            if (this.previousHeathen==null||this.previousHeathen.isConverted==true){
                this.newHeathen = new Heathen(this, Phaser.Math.Between(bounds,levelWidth-bounds), height*11/25,'heathen').setOrigin(0.5) 
                this.newHeathen.setDepth(1)
                this.previousHeathen = this.newHeathen
            }
            this.newHeathen.update()
        }
    }
}