class SmallChicken extends Chicken{
    y = 365;
    height = 60;
    width = 50;
    deadAudio = new Audio("Audio/chicken.wav")
    IMAGE_WALKING = [
        "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
        "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
        "img/3_enemies_chicken/chicken_small/1_walk/3_w.png"
    ];
    IMAGE_DEAD = "img/3_enemies_chicken/chicken_small/2_dead/dead.png";


    constructor() {
        super().loadImage("img/3_enemies_chicken/chicken_small/1_walk/1_w.png")
        this.initiateObject()
        this.x = 300 + Math.random() * 3000;
    }

   

}