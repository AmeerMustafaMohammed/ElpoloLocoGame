console.log("MovableClass")

class MovableObject {
    x = 50;
    y = 250;
    heigth = 200;
    width = 100;
    img = new Image();



    loadImage(path) {
        this.img.src = path;
    }

    drowImage(src, x, y) {

    }

    moveRight() {
        console.log("moveRight")
    }

}