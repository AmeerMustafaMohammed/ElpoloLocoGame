
class Character extends MovableObject {
    x = 10;
    y = 190;
    height = 250;
    width = this.height - 100;
    speed = 8;
    world;
    lastChange;
    playingDeadAnimation = false;
    IMAGE_WALKING = [
        "img/2_character_pepe/2_walk/W-21.png",
        "img/2_character_pepe/2_walk/W-22.png",
        "img/2_character_pepe/2_walk/W-23.png",
        "img/2_character_pepe/2_walk/W-24.png",
        "img/2_character_pepe/2_walk/W-25.png",
        "img/2_character_pepe/2_walk/W-26.png"
    ]
    JUMP_IMAGES = [
        "img/2_character_pepe/3_jump/J-31.png",
        "img/2_character_pepe/3_jump/J-32.png",
        "img/2_character_pepe/3_jump/J-33.png",
        "img/2_character_pepe/3_jump/J-34.png",
        "img/2_character_pepe/3_jump/J-35.png",
        "img/2_character_pepe/3_jump/J-36.png",
        "img/2_character_pepe/3_jump/J-37.png",
        "img/2_character_pepe/3_jump/J-38.png",
        "img/2_character_pepe/3_jump/J-39.png"
        
    ]
    IMAGE_DEAD =[
        "img/2_character_pepe/5_dead/D-51.png",
        "img/2_character_pepe/5_dead/D-52.png",
        "img/2_character_pepe/5_dead/D-53.png",
        "img/2_character_pepe/5_dead/D-54.png",
        "img/2_character_pepe/5_dead/D-55.png",
        "img/2_character_pepe/5_dead/D-56.png",
        "img/2_character_pepe/5_dead/D-57.png"
    ]
    IMAGE_HURT =[
        "img/2_character_pepe/4_hurt/H-41.png",
        "img/2_character_pepe/4_hurt/H-42.png",
        "img/2_character_pepe/4_hurt/H-43.png"
    ]

    IMAGE_IDLE_SHORT = [
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-2.png",
        "img/2_character_pepe/1_idle/idle/I-3.png",
        "img/2_character_pepe/1_idle/idle/I-4.png",
        "img/2_character_pepe/1_idle/idle/I-5.png",
        "img/2_character_pepe/1_idle/idle/I-6.png",
        "img/2_character_pepe/1_idle/idle/I-7.png",
        "img/2_character_pepe/1_idle/idle/I-8.png",
        "img/2_character_pepe/1_idle/idle/I-9.png",
        "img/2_character_pepe/1_idle/idle/I-10.png"
    ]
    IMAGE_IDLE = [
        "img/2_character_pepe/1_idle/long_idle/I-11.png",
        "img/2_character_pepe/1_idle/long_idle/I-12.png",
        "img/2_character_pepe/1_idle/long_idle/I-13.png",
        "img/2_character_pepe/1_idle/long_idle/I-14.png",
        "img/2_character_pepe/1_idle/long_idle/I-15.png",
        "img/2_character_pepe/1_idle/long_idle/I-16.png",
        "img/2_character_pepe/1_idle/long_idle/I-17.png",
        "img/2_character_pepe/1_idle/long_idle/I-18.png",
        "img/2_character_pepe/1_idle/long_idle/I-19.png",
        "img/2_character_pepe/1_idle/long_idle/I-20.png",
    ]

    constructor() {
        super().loadImage("img/2_character_pepe/2_walk/W-21.png")
        this.energy = 1000000;
        this.initiateObject()
    }
    
    initiateObject(){
        this.loadObjectImages()
        this.animate()
        this. Xfunction();
        this.applayGravity()
    }
    loadObjectImages(){
        this.loadImages(this.IMAGE_WALKING)
        this.loadImages(this.JUMP_IMAGES)
        this.loadImages(this.IMAGE_DEAD)
        this.loadImages(this.IMAGE_HURT)
        this.loadImages(this.IMAGE_IDLE)
        this.loadImages(this.IMAGE_IDLE_SHORT)
    }
    animate() {
        this.walking()
        this.jumpAnimation()
        this.deadAnimation()
        this.hurtAnimation()
        this.chekSleap()
    }

    walking(){
        this.movingCharackter()
        this.walkingAnimation()
    }

    //SUB Functions FOR WALKING ANIMATION
    movingCharackter(){
        setStopableInterval(() => {    
            if (this.world.keyboard.RIGHT && this.x <this.world.level.level_end_x) {
                this.moveRight()
                this.Xfunction()
            }
            
            if (this.world.keyboard.LEFT && this.x >-100) {
                this.moveleft()
                this.Xfunction()
            }
            this.playWalkingSound()

            this.moveCamera()    
        }, 1000/60);
    }
    moveCamera(){
        this.world.camera_x = -this.x + 100;
    }
    playWalkingSound(){
        if(this.world.keyboard.LEFT || this.world.keyboard.RIGHT){
            this.walkingAudio.play();
        }else{
            this.walkingAudio.pause()
        }
    }
    
   walkingAnimation(){
   setInterval(()=>{
        if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
            this.changeImages(this.IMAGE_WALKING)
        }

    }, 100)
   
    }


    //END ____  SUB Functions FOR WALKING ANIMATION


    
    jumpAnimation(){
       let intervalID =  setInterval(()=>{
           // console.log("JUMP_ANIMATION")
            if(this.isInAir()){
                this.changeImages(this.JUMP_IMAGES)
            }

            if(this.world.keyboard.SPACE && !this.isInAir()){
                this.jump()
                this.Xfunction()
            }
        }, 200 )
    
    }

    deadAnimation(){
        let deadInterwal =  setInterval(()=>{
            if( this.isDead() && this.playingDeadAnimation == false){
                this.playingDeadAnimation == true;
                this.changeImages(this.IMAGE_DEAD)
                GameOver()
            }
        }, 200 )
        this.pushIntervalIds(deadInterwal)
    }

    hurtAnimation(){
        setInterval(()=>{
           // console.log("_ANIMATION")
            if(this.isHurt()){
                this.changeImages(this.IMAGE_HURT)
                this.Xfunction()
            }
        }, 200 )
    }

    //TODO

    Xfunction(){
        this.lastChange = new Date().getTime();
    }
    chekSleap(){
        setInterval(()=>{
            let defeerent = (new Date().getTime()) - this.lastChange
             if(defeerent > 1000){
                 this.changeImages(this.IMAGE_IDLE_SHORT)
             }
             if(defeerent > 8000){
                this.changeImages(this.IMAGE_IDLE)
            }
         }, 500)
    }

    changeImages(images){
        let i = this.currentImage % images.length
        let path = images[i]
        this.img = this.imageCache[path]
        this.currentImage++
    }
    

}