console.log("MovableClass")

class MovableObject {
    x;
    y;
    height;
    width;
    speed = 0.15;
    img = new Image();
    imageCache = {};
    increasingDigit = 0;

    constructor() {
        //Empty
    }


    walking() {
        let imageCondition = "WalkingImages";
        const jsonLength = Object.keys(this.imageCache[imageCondition]).length;
        setInterval(() => {
            let loopCounter = this.loopWithModulo(jsonLength)
            this.img = this.imageCache[imageCondition][loopCounter];
        }, 100)
    }


    //Save all imagespath as an Imageobject in newJson and add newJson to ImageCache
    loadImages(imagesCondition, imagePaths) {
        let newJson = {}
        for (let i = 0; i < imagePaths.length; i++) {
            let newImage = new Image();
            newImage.src = imagePaths[i];
            newJson[i] = newImage;
        }
        this.imageCache[imagesCondition] = newJson;
    }

    loadImage(path) {
        this.img.src = path;
    }


    moveRight() {
        console.log("moveRight")
    }
    moveleft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }

    loopWithModulo(arrayLength) {
        let i = this.increasingDigit % arrayLength
        this.increasingDigit++
        return i;
    }
}