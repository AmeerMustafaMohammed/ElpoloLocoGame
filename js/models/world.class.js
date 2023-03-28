class World {
    level = levelEins;
    ctx;
    canvas;
    keyboard;
    camera_x =0;
    character =  new Character();
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d')
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.drawObjects()
    }
   
    drawCharacter(){
        this.flipImage(this.character)
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)
        this.character.world = this
        this.flipImageBack(this.character)
    }
    drawObjects() {
        this.clearCanvas()
        //TODO
        this.ctx.translate(this.camera_x,0)

        this.draw(this.level.backgroundobjects)
        this.draw(this.level.clouds)
        this.draw(this.level.enemies)
       
        
        this.drawCharacter()
      
        this.ctx.translate(-this.camera_x,0)
        this.reDraw()
    }

    draw(objects) {
        objects.forEach(object => this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height))
    }


    //SUBfuntions
   
   
    flipImage(object){
        if(object.otherDirection){
            this.ctx.save();
            this.ctx.translate(object.width,0)
            this.ctx.scale(-1,1);
            object.x = object.x * -1;
        }
    }
    flipImageBack(object){
        if(object.otherDirection){
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
            self.drawObjects();
        });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


}