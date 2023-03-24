console.log("CharacterClass")

class Character extends MovableObject {
    x = 50;
    y = 180;
    height = 250;
    width = this.height - 100;
    IMAGE_WALKING = [
        "img/2_character_pepe/2_walk/W-21.png",
        "img/2_character_pepe/2_walk/W-22.png",
        "img/2_character_pepe/2_walk/W-23.png",
        "img/2_character_pepe/2_walk/W-24.png",
        "img/2_character_pepe/2_walk/W-25.png",
        "img/2_character_pepe/2_walk/W-26.png"
    ]

    constructor(keyboard) {
        super().loadImage("../img/2_character_pepe/2_walk/W-21.png")
        this.keyboard = keyboard;
        this.loadImages("WalkingImages", this.IMAGE_WALKING)
        this.animate()
    }


    animate() {
        let imageCondition = "WalkingImages";
        const jsonLength = Object.keys(this.imageCache[imageCondition]).length;
        setInterval(() => {
            let loopCounter = this.loopWithModulo(jsonLength)
            if (this.keyboard.RIGHT) {
                this.img = this.imageCache[imageCondition][loopCounter];
            }
        }, 100)
    }

    jump() {
        console.log("jump")
    }
}