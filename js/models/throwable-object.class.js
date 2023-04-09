class ThrowableObject extends MovableObject{
  
    y = 200;
    height = 100;
    width= 100;
    constructor(x){
        super();
        this.loadImage("img/6_salsa_bottle/salsa_bottle.png")
        this.x = x;
        this.speedY = 30;
        this.throw()
      
    }

    throw(){
        this.applayGravity()
        this.changeX()
       
    }
    changeX(){
        setInterval(()=>{
            this.x += 0.5;
        })
    }
}