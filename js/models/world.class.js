class World {
    level = levelEins;
    ctx;
    canvas;
    keyboard;
    camera_x =0;
    treasure ={
        "coins": 0,
        "bottle":0,
        }
    statusbars = [
      new LifeBar(),
      new CoinBar(),
      new BottleBar()

    ]
    throwableObjects =[
        
    ]
    collectableObjects=[
        new Bottle(200,350) ,
        new Bottle(800,350) ,
        new Bottle(1000,350) ,
        new Bottle(2000,350) ,
        new Bottle(2200,350) ,
        
        new Coin(200,100) ,
        new Coin(800,100) ,
        new Coin(1000,100) ,
        new Coin(1900,100) ,
        new Coin(2000,100) ,

    ]
    characters =  [new Character()]
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d')
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld()
        this.checkCollisions();
        this.renderLevelOne()
        this.worldInterwals();
    }
   

    renderLevelOne() {

        this.clearCanvas()
        this.setCamera()
        this.drawMovableObjects()
       this.drawThrowableObjects()

       this.drawCollectableObjects()
       this.setCameraBack()
        this.reDraw()
       this.drawStaticObjects()

    }
    drawCollectableObjects(){
        this.draw(this.collectableObjects)
    }
  
    drawThrowableObjects(){
        this.draw(this.throwableObjects)
    }
    drawStaticObjects(){
        this.draw(this.statusbars)
    }
   
    drawMovableObjects(){
        this.draw(this.level.backgroundobjects)
        this.draw(this.level.clouds)
        this.draw(this.level.enemies)
        this.draw(this.characters)
      
    }
   
    draw(objects) {
        objects.forEach(object =>{
            if(object instanceof Character || object instanceof Chicken || object instanceof CollectableObject){
                this.drawFrame(object.x, object.y, object.width,object.height)
            }
            this.flipImage(object)
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
            this.flipImageBack(object)
        } )
    }

    worldInterwals(){
        setInterval(()=>{
            this.checkCollisions()
           
            //Throwing
            if(this.keyboard.D && this.treasure["bottle"]>0){
                this.treasure["bottle"] -=20
                this.throwBottle()
                
            }
        },100)
    }
    //TODO::
    throwBottle(){
            this.throwableObjects.push(new ThrowableObject(this.characters[0].x))
            this.updateTrasure(2,"bottle")
    }

    //COLISIONENS
    checkCollisions(){
            this.detectEnemyCollision()
            this.detectCollectibleCollision()
    }

    detectEnemyCollision(){
    let enemies = this.level.enemies
    enemies.forEach((enemy)=>{
        if(this.characters[0].isColliding(enemy)){
            this.characters[0].hit()
            this.statusbars[0].changePercentage(this.characters[0].energy)
        }
    })
 }
 detectCollectibleCollision(){
        this.collectableObjects.forEach((collectableObject)=>{
            if(collectableObject.isColliding(this.characters[0])){ 
                    //this.changeStatusBar(collectableObject)

                this.addToMyTreasure(collectableObject)
                collectableObject.removeObject(collectableObject,this.collectableObjects)
                //TODO
            }
          
        })
       }
       addToMyTreasure(collectableObject){
        if(collectableObject instanceof Coin){
          
            this.treasure["coins"] +=20;
            this.updateTrasure(1,"coins");

           
        }
        if(collectableObject instanceof Bottle){
            this.treasure["bottle"] +=20;
            this.updateTrasure(2,"bottle");
          
        }
       
    }
      
    updateTrasure(x,y){
        
        console.log(this.treasure[`${y}`])
        this.statusbars[x].changePercentage(this.treasure[y])

    }
       changeStatusBar(collectableObject){
        //console.log(collectableObject)
        //collectableObject.changePercentage();
       }
    /* FRAME */
    drawFrame(x,y,width,height){
        this.ctx.beginPath();
        this.ctx.lineWidth = '0';
        this.ctx.strokeStyle = 'blue';
        this.ctx.rect(x,y,width,height);
        this.ctx.stroke();
    }

    /* FLIP IMAGE */
   
    flipImage(object){
        if(object.otherDirection && object instanceof Character){
            this.ctx.save();
            this.ctx.translate(object.width,0)
            this.ctx.scale(-1,1);
            object.x = object.x * -1;
        }
    }
    flipImageBack(object){
        if(object.otherDirection && object instanceof Character){
            this.ctx.restore();
            object.x = object.x * -1;
        }
    }
 /**
        * Schedule a redraw of the current object using `requestAnimationFrame()`.
        * This method is typically used to schedule a redraw of a canvas or other graphical element.
    */

    reDraw() {
        let self = this;
        requestAnimationFrame(function () {
            self.renderLevelOne();
        });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    /* CAMERA */
    setCamera(){
        this.ctx.translate(this.camera_x,0)
    }
    setCameraBack(){
        
        this.ctx.translate(-this.camera_x,0)
    }


    setWorld(){
        this.characters[0].world = this
       
    }
}