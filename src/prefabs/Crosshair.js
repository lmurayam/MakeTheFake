class Crosshair extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,x,y,texture){
        super(scene,x,y,texture);
        //add to scene and set up state
        scene.add.existing(this);
        this.isShooting = false
        //add gun
        this.gun = this.scene.add.sprite(width/2,height-height/7,'gun',0).setOrigin(0.5)
        this.gunBarrel = {x:0,y:0}
        this.gun.setScrollFactor(0)
        this.gun.setDepth(12)
        this.bullets = this.scene.add.group()
    }

    //calculate the angle given 2 points
    calculateAngle(x1, y1, x2, y2) {
        const angleRadians = Math.atan2(y2 - y1, x2 - x1);
        let angleDegrees = (angleRadians * 180) / Math.PI;

        if (angleDegrees < 0) {
            angleDegrees += 360;
        }
    
        return angleDegrees;
    }

    //calculate the angle given the crosshair position and a point at the bottom of the screen
    calculateCrosshairAngle(){
        return Math.round(this.calculateAngle(this.x,this.y,this.scene.cameras.main.midPoint.x,height*17/20))
    }

    //given a point and an angle, create a line and get a point that is further down on the line
    calculatePointAlongLine(x,y,angle,distance){
        const angleRadians = (angle * Math.PI)/180
        const newX = x + distance * Math.cos(angleRadians)
        const newY = y + distance * Math.sin(angleRadians)
        return {x:newX,y:newY}
    }

    //given the angle calculated with calculateCrosshairAngle, change the gun image to show the angle
    gunAngle(){
        let angle = this.calculateCrosshairAngle()
        this.gunBarrel = this.calculatePointAlongLine(this.x,this.y,angle,50)
        //base angle on a center 90 degrees
        angle -= 90
        if (angle < 0){
            this.gun.flipX=true
        }
        else{
            this.gun.flipX=false
        }
        angle = Math.abs(angle)
        if (angle == 45){
            this.gun.setFrame(3)
        }
        else if (angle>12 && angle<30){
            this.gun.setFrame(1)
        }
        else if (angle>=30 && angle<45){
            this.gun.setFrame(2)
        }
        else{
            this.gun.setFrame(0)
        }
    }


    update(){
        this.gunAngle()
        //control movement
        if(keyLeft.isDown&&this.x>bounds){
            this.x -= 1
        }
        else if(keyRight.isDown&&this.x<levelWidth-bounds){
            this.x += 1
        }
        //control shooting
        if(keySpace.isDown&&this.isShooting==false&&this.bullets.getChildren().length<3){
            this.isShooting=true
            this.scene.sound.play('sfx_blast')
            let bullet = new Bullet(this.scene,this.gunBarrel.x,this.gunBarrel.y,'bible',this.calculateCrosshairAngle())
            this.bullets.add(bullet)
        }
        if(keySpace.isUp){
            this.isShooting=false
        }
        //update bullets
        this.bullets.getChildren().forEach(bullet => {
            bullet.update()
        });
    }
}