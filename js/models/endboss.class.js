class Endboos extends MovableObject{
    y = -35;
    x= 3.5 *719 ;
    height = 500;
    width = 300;
    animating = false;
    world;
    IMAGE_ALERT;
    IMAGE_DEAD;
    IMAGE_WALKING;
   IMAGE_ATTACK;
   IMAGE_HURT;
    
    constructor() {
        console.log("Endbios createt")
        super().loadImage("img/4_enemie_boss_chicken/2_alert/G5.png")
    
       this.IMAGE_ALERT = BIG_BOS_ALERT;
       this.IMAGE_ATTACK = BIG_BOS_ATTACK;
       this.IMAGE_DEAD = BIG_BOS_DEAD;
       this.IMAGE_HURT = BIG_BOS_HURT;
       this.IMAGE_WALKING = BIG_BOS_WALKING;
       this.loadAllImages()
        
    }
    loadAllImages(){
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
        this.alert();
        this.deadAnimationplay();
        this.hurtAnimation()
        
    }
    animationModifier() {
        setInterval(() => {
            if (this.world && (Math.abs(this.world.mainCharacter.x - this.x) < 500) && !this.isDead() ) {
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
                showWinScreen()
             }

        },50)
    }
    
    hurtAnimation(){
        console.log("start")
        let hurtinterval = setInterval(()=>{
            if(this.world && !this.isDead() && this.isColliding(this.world.throwableObjects[0])){
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