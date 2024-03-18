class Bottle extends CollectableObject{
    splashed = false;
    IMAGE_ROTATION;
    IMAGE_SPLASH;
    constructor(x,y){
        super();
        this.loadImage("img/6_salsa_bottle/2_salsa_bottle_on_ground.png")
        this.IMAGE_ROTATION = BOTTEL_ROTATION;
        this.IMAGE_SPLASH = BOTTEL_SPLASH;
        this.loadImages(this.IMAGE_ROTATION);
        this.loadImages(this.IMAGE_SPLASH);
        this.x = x;
        this.y = y;
        this.height =80;
        this.width = 100;
    }
}