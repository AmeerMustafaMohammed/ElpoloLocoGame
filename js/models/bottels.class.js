class Bottle extends CollectableObject{

    IMAGE_ROTATION = [
        "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
    ];
    constructor(x,y){
        super();
        this.loadImage("img/6_salsa_bottle/2_salsa_bottle_on_ground.png")
        this.loadImages(this.IMAGE_ROTATION)
        this.x = x;
        this.y = y;
        this.height =80;
        this.width = 100;
       // this.animate()
    }

    animate(){
        this.playAnimation(this.IMAGE_ROTATION)
        console.log(this.IMAGE_ROTATION)
    }
}