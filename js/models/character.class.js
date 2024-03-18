class Character extends MovableObject {
    x = 10;
    y = 190;
    height = 250;
    width = this.height - 100;
    speed = 8;
    world;
    lastChange;
    playingDeadAnimation = false;
    walkingAudio = new Audio("Audio/walking.mp3")
    jumpingAudio = new Audio("sound_2/jump.mp3")
    deadAudio = new Audio("Audio/dead.mp3")
   
    constructor() {
        console.log("Charkter createt")
        super().loadImage("img/2_character_pepe/2_walk/W-21.png")
        //this.energy = 1000000;
        this.initiateObject()
    }
    
    initiateObject(){
        this.loadObjectImages()
        this.animate()
        this. Xfunction();
        this.applayGravity()
    }
    loadObjectImages(){
       this.loadImages(IMAGE_WALKING_CHARACTER);
        this.loadImages(CHARACTER_JUMPING);
        this.loadImages(CHARACTER_DEAD);
        this.loadImages(CHARACTER_HURT);
        this.loadImages(CHARACTER_IDLE_SHORT);
        this.loadImages(CHARACTER_IDLE);
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
            this.changeImages(IMAGE_WALKING_CHARACTER)
        }

    }, 100)
   
    }


    //END ____  SUB Functions FOR WALKING ANIMATION


    
    jumpAnimation(){
       let intervalID =  setInterval(()=>{
           // console.log("JUMP_ANIMATION")
            if(this.isInAir()){
                this.changeImages(CHARACTER_JUMPING)
            }

            if(this.world.keyboard.SPACE && !this.isInAir()){
                this.jump()
                this.playSound(this.jumpingAudio);
                this.Xfunction()
            }
        }, 200 )
    
    }

    deadAnimation(){
        let deadInterwal =  setInterval(()=>{
            if( this.isDead() && this.playingDeadAnimation == false){
                this.playingDeadAnimation == true;
                this.changeImages(CHARACTER_DEAD)
                GameOver()
                this.deadAudio.play();
            }
        }, 200 )
        this.pushIntervalIds(deadInterwal)
    }

    hurtAnimation(){
        setInterval(()=>{
           // console.log("_ANIMATION")
            if(this.isHurt()){
                this.changeImages(CHARACTER_HURT)
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
                 this.changeImages(CHARACTER_IDLE_SHORT)
             }
             if(defeerent > 8000){
                this.changeImages(CHARACTER_IDLE)
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