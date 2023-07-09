class ThrowableObject extends MovableObject{
    height = 100;
    width= 120;
    constructor(x,y){
        super();
        this.loadImage("img/6_salsa_bottle/salsa_bottle.png")
        this.x = x;
        this.y = y ; 
        this.speedY =25;
        this.throw()
      
    }

    throw(){
        this.applayGravity()
        this.changeX()
       
    }
    changeX(){
        setInterval(()=>{
            this.x += 12;
           
        },25)
    }
}