class ThroableBottle extends Bottle{
    height = 100;
    width= 120;
    incrementAmount = 12;
    splashed = false;
    throwAudio = new Audio("Audio/throw.mp3")
    constructor(x,y,charackterDirection){
        super();
        this.loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png")
        this.x = x;
        this.y = y ; 
        this.speedY =25;
        this.otherDirection = charackterDirection;
        this.throw()
    }

    
    throw(){
        this.applayGravity()
        this.changeX()
        this.rotate();
        this.playThrowingAudio();
       
    }
    changeX(){
        
        if(this.otherDirection){
            this.incrementAmount *= -1;
        }
        setInterval(()=>{
            this.x += this.incrementAmount;
           
        },25)
    }
    rotate(){
            this.playAnimation(this.IMAGE_ROTATION,40)
    }

    splasch(){
        this.playAnimation(this.IMAGE_SPLASH,30)  
        this.splashed = true;
    }
  
    playThrowingAudio(){
        if(!muted){
            this.throwAudio.play()
        }
      
    }
}