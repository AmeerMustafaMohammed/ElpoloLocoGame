class Backgroundobject extends MovableObject {
    x = 0;
    y = 0;
    height = 480;
    width = 720;
    constructor(imagepath) {
        super().loadImage(imagepath);
    }
}