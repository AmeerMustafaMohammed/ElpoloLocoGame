class ThroableBottle extends Bottle{
    height = 100;
    width= 120;
    incrementAmount = 12;
    constructor(x,y,charackterDirection){
        super();
        this.loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png")
        this.x = x;
        this.y = y ; 
        this.speedY =25;
        this.otherDirection = charackterDirection;
        this.throw()
        console.log(this.otherDirection)
      
    }

    
    throw(){
        this.applayGravity()
        this.changeX()
        this.rotate();
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
        this.playAnimation(this.IMAGE_ROTATION,50)
    }
  
}