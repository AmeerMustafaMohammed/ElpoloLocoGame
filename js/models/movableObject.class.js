console.log("MovableClass")

class MovableObject {
    x = 0;
    y = 0;
    heigth = 200;
    width = 100;
    img;



    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    drowImage(src, x, y) {

    }

    moveRight() {
        console.log("moveRight")
    }

}