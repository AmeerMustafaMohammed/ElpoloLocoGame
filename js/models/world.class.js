class World {
    level = initLevelOne();
    mainCharacter= this.level.characters[0]
    ctx;
    canvas;
    drawInterval;
    keyboard;
    camera_x =0;
    canThrowMaximalBottle = true;
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
        this.draw(this.level.specialEnemies)
        this.draw(this.level.characters)
      
    }
   
    draw(objects) {
        objects.forEach(object =>{
            //TODO
            if(true){
                //this.drawFrame(object.x, object.y, object.width,object.height)
            }
            this.flipImage(object)
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
            this.flipImageBack(object)
        } )
    }

    worldInterwals(){
        setInterval(()=>{
            //Cheacking for Collisions
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
        },500);
    }
    //TODO::
    throwBottle(){
        let bottelY = this.mainCharacter.y +(this.mainCharacter.height/2);
        let bootleX = this.mainCharacter.x;
        let bootleDirection = this.mainCharacter.otherDirection;
        let bootle = new ThroableBottle(bootleX,bottelY,bootleDirection)
        this.throwableObjects.push(bootle)
        this.updateBottelbar();
    }

    //COLISIONENS
    checkCollisions(){
        //Killing enemies
        this.detectKilling()
        this.detectEndbosKilling()

        //Charakter being hurt and killed
        this.detectEnemyCollision()
        this.detectEndbossCollision()
        //Colleting treasurey
        this.detectCollectibleCollision()
    }

    detectEnemyCollision(){
    let enemies = this.level.enemies
    enemies.forEach((enemy)=>{
        if(this.mainCharacter.isColliding(enemy) && !enemy.dead){
            this.mainCharacter.hit()
            this.updateCharacterLifebar()
        }
    })
 }

 detectEndbossCollision(){
    let endBoss = this.level.specialEnemies[0];
    if(endBoss.isColliding(this.mainCharacter)){
        this.mainCharacter.hit()
        this.updateCharacterLifebar() 
    }

 }


 detectKilling() {
    let enemies = this.level.enemies;
    enemies.forEach((enemy) => {
      if (this.mainCharacter.KillingNormalAnemy(enemy) && !enemy.dead) {
        enemy.dead = true;
        this.deleteObjectOnMap(this.level.enemies,enemy,1000)
      }
    });
  }

  detectEndbosKilling(){
    let endBoss = this.level.specialEnemies[0];
    this.throwableObjects.forEach((bootle)=>{
        if(bootle.isColliding(endBoss) && !bootle.splashed){
           endBoss.energy -= 20;
           bootle.splasch();
           this.updateEndbossLifebar(endBoss)
           this.deleteObjectOnMap(this.throwableObjects,bootle,180)
        }
    })
     }

 detectCollectibleCollision(){
        this.collectableObjects.forEach((collectableObject)=>{
            if(this.mainCharacter.isColliding(collectableObject)){ 
                this.addToMyTreasure(collectableObject)
                 this.deleteObjectOnMap(this.collectableObjects,collectableObject )
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


//UPDATEING LIFEBARS
    updateCoinbar(){
        this.level.coinbar[0].changePercentage(this.treasure["coins"]);
    }
    updateBottelbar(){
        this.level.bottelbar[0].changePercentage(this.treasure["bottle"]);
    }
      
    updateCharacterLifebar(){
        this.level.lifebar[0].changePercentage(this.mainCharacter.energy);
     }
    
     updateEndbossLifebar(endBoss){
        this.level.lifebar[1].changePercentage(endBoss.energy);
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
        this.drawInterval = requestAnimationFrame(function () {
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
        this.mainCharacter.world = this
        this.level.specialEnemies[0].world= this
    }

    
deleteObjectOnMap(ObjectArray,objectToDelete,deley){
    setTimeout(()=>{
        let i = ObjectArray.indexOf(objectToDelete);
        ObjectArray.splice(i,1);
        },deley)
  }


  clearIntervals(){
    cancelAnimationFrame(this.drawInterval);
  }
}