class World {
    level = levelEins;
    ctx;
    canvas;
    keyboard;
    camera_x =0;
    canThrowMaximalBottle = true;
    characters =  [new Character()]
    Character = this.characters[0]
    treasure ={
        "coins": 0,
        "bottle":0,
        }
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
      
        this.draw(this.level.lifebar)
        this.draw(this.level.bottelbar)
        this.draw(this.level.coinbar)
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
            if(this.keyboard.D && this.treasure["bottle"]>0 && this.canThrowMaximalBottle){
                this.treasure["bottle"] -=20
                this.throwBottle()
                this.setMaximalBottle()
            }
            
            
        },50)
    }

    setMaximalBottle(){
        this.canThrowMaximalBottle = false;
        setTimeout(() => {
          this.canThrowMaximalBottle = true;
        }, 1000);
    }
    //TODO::
    throwBottle(){
        let bottelY = this.characters[0].y +(this.characters[0].height/2);
        let bootleX = this.characters[0].x;
        let bootleDirection = this.characters[0].otherDirection;
        let bootle = new ThroableBottle(bootleX,bottelY,bootleDirection)
        this.throwableObjects.push(bootle)
        this.updateBottelbar();
    }

    //COLISIONENS
    checkCollisions(){
        this.detectKilling()
        this.detectEnemyCollision()
        this.detectCollectibleCollision()
    }

    detectEnemyCollision(){
    let enemies = this.level.enemies
    enemies.forEach((enemy)=>{
        if(this.characters[0].isColliding(enemy) && !enemy.dead){
            this.characters[0].hit()
        }
    })
 }

 detectKilling() {
    let enemies = this.level.enemies;
    enemies.forEach((enemy, index) => {
      if (this.characters[0].KillingNormalAnemy(enemy) && !enemy.dead) {
        enemy.dead = true;
        console.log("KILING" , index)
        //enemy.playDeadSound();
        // Remove the killed enemy from the enemies array
        setTimeout(()=>{
        this.level.enemies.splice(index, 1);
        console.log("DELETED",index)           
        },1000)
      }
    });
  }
 detectCollectibleCollision(){
        this.collectableObjects.forEach((collectableObject)=>{
        
            if(this.characters[0].isColliding(collectableObject)){ 
                this.addToMyTreasure(collectableObject)
                collectableObject.removeObject(collectableObject,this.collectableObjects)
        
             }
          
        })
       }
       addToMyTreasure(collectableObject){
        if(collectableObject instanceof Coin){

            this.treasure["coins"] +=20;
           this.updateCoinbar();
        }
        if(collectableObject instanceof Bottle){
            this.treasure["bottle"] +=20;
          this.updateBottelbar();
        
        }
       
    }

    updateCoinbar(){
        this.level.coinbar[0].changePercentage(this.treasure["coins"]);
    }
    updateBottelbar(){
       
        this.level.bottelbar[0].changePercentage(this.treasure["bottle"]);
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