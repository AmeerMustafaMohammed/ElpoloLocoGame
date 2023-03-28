class Endboos extends MovableObject{
    y = -35;
    x= 3*719 + 300;
    height = 500;
    width = 300;
    IMAGE_ALERT = [
        "img/4_enemie_boss_chicken/2_alert/G5.png",
        "img/4_enemie_boss_chicken/2_alert/G6.png",
        "img/4_enemie_boss_chicken/2_alert/G7.png",
        "img/4_enemie_boss_chicken/2_alert/G8.png",
        "img/4_enemie_boss_chicken/2_alert/G9.png",
        "img/4_enemie_boss_chicken/2_alert/G10.png",
        "img/4_enemie_boss_chicken/2_alert/G11.png",
        "img/4_enemie_boss_chicken/2_alert/G12.png",
    ];
    constructor() {
        super().loadImage(this.IMAGE_ALERT[0])
        this.loadImages("alertImages", this.IMAGE_ALERT)
        this.animate();
    }

    animate() {
      this.alert()
    }
   /*  dead() {
        this.currentImage = 0;
        setInterval(() => {
            let i = this.currentImage % this.IMAGE_DEAD.length
            console.log(i)
            this.img = this.imageCache[this.IMAGE_DEAD[i]]
            this.currentImage++
            console.log("currentImage", this.currentImage)

        }, 1000)
    }

    eat() {
        console.log("Eat")
    } */
}