
class MovableObject extends DrawableOject{
    dead = false;
    energy = 100;
    speed = 0.15;
    animationSpeed = 100;
    otherDirection = false;
    acceleration = 2.5;
    speedY = 0;
    lastHit =0;
    localInterval = [];
    walkingAudio = new Audio("Audio/walking.mp3")
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }

    constructor() {
       super()
    }

    jump(){
        this.speedY =30
    }
    applayGravity(){
        setInterval(() => {
          if(this.isInAir() ||  this.speedY>0){
           //DOWN
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
          }
        }, 50);
    }

    isInAir(){
        if(this instanceof ThroableBottle){
            return true;
        }
        return this.y < 180;
    }

   
    alert(){
        let animationImages = "alertImages";
        //this.playAnimation(animationImages)
    }
    
    playAnimation(images,animationSpeed){
        this.setAnimationSpeed(animationSpeed)
     let id = setInterval(()=>{

            let i = this.currentImage % images.length   
            let path =images[i]
            this.img = this.imageCache[path]
            this.currentImage++
        },this.animationSpeed)
        this.saveIntervalId(id)
    }


    // applying outside speed on animation if exists
    setAnimationSpeed(animationSpeed){
        if(animationSpeed){
            this.animationSpeed = animationSpeed;
        }
    }

  stopAnimation(){
    this.localInterval.forEach((e)=>{
        clearInterval(e)
    })
   
  }

  saveIntervalId(id){
    this.localInterval.push(id)
  }

   
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }
    moveleft() {
            this.x -= this.speed;
            this.otherDirection = true;
           
    }

    loopWithModulo(arrayLength) {
        let i = this.increasingDigit % arrayLength
        this.increasingDigit++
        return i;
    }
    

   
    isColliding(mo) {
        let rightLeft = this.x + this.width - this.offset.right > mo.x + mo.offset.left;   //   right > left =>   Collision in front
        let topBottom = this.y + this.height - this.offset.bottom > mo.y + mo.offset.top;    //    top > bottom =>   Collision bottom
        let leftRight = this.x + this.offset.left < mo.x + mo.width - mo.offset.right;       //     left > right =>   Collision behind
        let bottomTop = this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;//      bottom > top =>   Collision top  
        return rightLeft && topBottom && leftRight && bottomTop
    }

    KillingNormalAnemy(mo){
        let firstCondition = this.isColliding(mo) 
        let secondCondition = this instanceof Character && this.isInAir() 
        return firstCondition && secondCondition
    }

    hit(){
        this.energy -=2;
        if(this.energy<0){
            this.energy = 0;
        }
        else{
            this.lastHit = new Date().getTime();
        }
       
    }

    isDead(){
        return   this.energy == 0;
    }
    
    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit
            timepassed = timepassed / 1000;
            return timepassed < 0.5;
       }


       removeObject(object,array){
        array.splice(array.indexOf(object), 1);
    }

    
} 