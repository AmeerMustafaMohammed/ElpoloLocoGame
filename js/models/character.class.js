console.log("CharacterClass")

class Character extends MovableObject {
    x = 50;
    y = 180;
    height = 250;
    width = this.height - 100;
    speed = 8;
    world;
    IMAGE_WALKING = [
        "img/2_character_pepe/2_walk/W-21.png",
        "img/2_character_pepe/2_walk/W-22.png",
        "img/2_character_pepe/2_walk/W-23.png",
        "img/2_character_pepe/2_walk/W-24.png",
        "img/2_character_pepe/2_walk/W-25.png",
        "img/2_character_pepe/2_walk/W-26.png"
    ]

    constructor() {
        super().loadImage("img/2_character_pepe/2_walk/W-21.png")
        this.loadImages("WalkingImages", this.IMAGE_WALKING)
        this.animate()
    }


    animate() {
        this.walkingAnimation()
        
    }

    walkingAnimation(){
        this.movingCharackter()
        this.changeImages_Walking()
    }

    //SUB Functions FOR WALKING ANIMATION
    movingCharackter(){
        setInterval(() => {
            
            if (this.world.keyboard.RIGHT && this.x <this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walkingAudio.play()
            }
            

            if (this.world.keyboard.LEFT && this.x >-100) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.playWalkingSound()

                this.world.camera_x = -this.x + 100;
            
           
        }, 1000/60);
    }
    playWalkingSound(){
        if(this.world.keyboard.LEFT || this.world.keyboard.RIGHT){
            this.walkingAudio.play();
        }else{
            this.walkingAudio.pause()
        }
    }
    changeImages_Walking(){
        let imageCondition = "WalkingImages";
        const jsonLength = Object.keys(this.imageCache[imageCondition]).length;
        setInterval(() => {
            let loopCounter = this.loopWithModulo(jsonLength)
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                 //Walk animation
                this.img = this.imageCache[imageCondition][loopCounter];
            }
        }, 50)
    }
    //END ____  SUB Functions FOR WALKING ANIMATION
    jump() {
        console.log("jump")
    }
}