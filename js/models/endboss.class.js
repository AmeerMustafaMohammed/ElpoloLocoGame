class Endboos extends MovableObject{
    y = -35;
    x= 3*719 ;
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
    IMAGE_DEAD = [
        "img/4_enemie_boss_chicken/5_dead/G24.png",
        "img/4_enemie_boss_chicken/5_dead/G25.png",
        "img/4_enemie_boss_chicken/5_dead/G26.png"
    ]
    constructor() {
        super().loadImage("img/4_enemie_boss_chicken/2_alert/G5.png")
        this.loadImages(this.IMAGE_ALERT)
        this.loadImages(this.IMAGE_DEAD)
        this.animate()
    }

    animate(){
        let id = setInterval(()=>{
            if(this.isDead()){
               this.playAnimation(this.IMAGE_DEAD,3000) 
            }
        },50)
    }
    
 
}