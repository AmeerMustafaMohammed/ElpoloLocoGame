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
        console.log("Throwable object erstellt!")
    }

    throw(){
        this.applayGravity()
        this.changeX()
        console.log("throw")
    }
    changeX(){
        setInterval(()=>{
            this.x += 0.5;
        })
    }
}