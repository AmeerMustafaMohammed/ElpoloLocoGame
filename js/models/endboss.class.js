class Endboos extends MovableObject{
    y = -35;
    x= 3.5 *719 ;
    height = 500;
    width = 300;
    animating = false;
    world;
    IMAGE_ALERT = [
        "img/4_enemie_boss_chicken/2_alert/G5.png",
        "img/4_enemie_boss_chicken/2_alert/G6.png",
        "img/4_enemie_boss_chicken/2_alert/G7.png",
        "img/4_enemie_boss_chicken/2_alert/G8.png",
        "img/4_enemie_boss_chicken/2_alert/G9.png",
        "img/4_enemie_boss_chicken/2_alert/G10.png",
        "img/4_enemie_boss_chicken/2_alert/G11.png",
        "img/4_enemie_boss_chicken/2_alert/G12.png"
    ];
    IMAGE_DEAD = [
        "img/4_enemie_boss_chicken/5_dead/G24.png",
        "img/4_enemie_boss_chicken/5_dead/G25.png",
        "img/4_enemie_boss_chicken/5_dead/G26.png"
    ];
    IMAGE_WALKING = [
        "img/4_enemie_boss_chicken/1_walk/G1.png",
        "img/4_enemie_boss_chicken/1_walk/G2.png",
        "img/4_enemie_boss_chicken/1_walk/G3.png",
        "img/4_enemie_boss_chicken/1_walk/G4.png"
    ];
   IMAGE_ATTACK=[
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
    
   ]
   IMAGE_HURT = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
   ]
    
    constructor() {
        super().loadImage("img/4_enemie_boss_chicken/2_alert/G5.png")
        this.loadImages(this.IMAGE_WALKING)
        this.loadImages(this.IMAGE_ALERT)
        this.loadImages(this.IMAGE_ATTACK)
        this.loadImages(this.IMAGE_HURT)
        this.loadImages(this.IMAGE_DEAD)
        this.animate()
    }

    animate(){
        this.animationModifier()
        //this.walking();
        //this.alert();
        this.deadAnimationplay();
        //this.hurtAnimation()
        
    }
    animationModifier() {
        setInterval(() => {
            if (this.world && (Math.abs(this.world.characters[0].x - this.x) < 500) && !this.isDead() ) {
                this.stopObjectAnimation();
                if (this.walkingAnimation > 0) {
                    this.walking();
                    this.walkingAnimation--;
                } else {
                    this.alert();
                    this.walkingAnimation = 8;
                }
            }
        }, 500);
    }
    
    walking(){
        let intervalID = setInterval(()=>{
                  this.moveleft()
            },100/60)
            this.pushIntervalIds(intervalID)
            this.playAnimation(this.IMAGE_WALKING)
      }//walking(){

      alert(){
        this.playAnimation(this.IMAGE_ATTACK) 
      }// alert(){
      
      deadAnimationplay(){
        let myInterval = setInterval(()=>{
            if(this.isDead()){
                this.stopObjectAnimation()
                setTimeout(()=>{
                    this.drowningDeadBody()
                },800)
                this.playAnimation(this.IMAGE_DEAD,500)
                clearInterval(myInterval);
             }
        },50)
    }
    
    hurtAnimation(){
        let hurtinterval = setInterval(()=>{
            if(!this.isDead() && this.isColliding(this.world.throwableObjects[0])){
                console.log("hurt")
                this.stopObjectAnimation()
                this.playAnimation(this.IMAGE_HURT)
            }
        },50)
    }

    drowningDeadBody() {
        let id = setInterval(()=>{
            this.y += 0.5;
        },1)
       
    }
 
} 

// it should start with alert 
//then walking 
// then hurt and dead
//Links auspaken