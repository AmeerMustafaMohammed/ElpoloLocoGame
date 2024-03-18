class SmallChicken extends Chicken{
    y = 365;
    height = 60;
    width = 50;
    deadAudio = new Audio("./Audio/chicken.wav")
    constructor() {
        super().loadImage("img/3_enemies_chicken/chicken_small/1_walk/1_w.png")
        this.IMAGE_WALKING = SMALL_CHICKEN_WALKING;
        this.IMAGE_DEAD = SMALL_CHICKEN_DEAD;
        this.initiateObject()
        this.x = 300 + Math.random() * 3000;
    }

}