console.log("ChickenClass")


class Chicken extends MovableObject {


    constructor(x, y) {
        super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png")
        this.x = x;
        this.y = y;

    }

    eat() {
        console.log("Eat")
    }
}