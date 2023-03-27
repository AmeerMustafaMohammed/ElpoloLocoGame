class World {
    ctx;
    canvas;
    keyboard;
    camera_x =0;
    backgroundobjects = [
        new Backgroundobject("img/5_background/layers/air.png"),
        new Backgroundobject("img/5_background/layers/3_third_layer/1.png"),
        new Backgroundobject("img/5_background/layers/2_second_layer/1.png"),
        new Backgroundobject("img/5_background/layers/1_first_layer/1.png")
    ]
    clouds = [
        new Cloud()
    ]
    
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ]
    characters = [
        new Character(keyboard),
    ]


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d')
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.drawObjects()
        this.setWorld()
    }

    drawObjects() {
        this.clearCanvas()
        this.ctx.translate(this.camera_x,0)
        this.draw(this.backgroundobjects)
        this.draw(this.clouds)
        this.draw(this.enemies)
        this.draw(this.characters)
        this.ctx.translate(-this.camera_x,0)
        this.reDraw()
    }

    setWorld() {
    this.characters.forEach(character =>character.world = this)
    }
   
   
    draw(objects) {
        for(let i =0;i<objects.length;i++){
            let currentObject = objects[i]
            this.flipImage(currentObject)
            this.ctx.drawImage(currentObject.img, currentObject.x, currentObject.y, currentObject.width, currentObject.height)
            this.flipImageBack(currentObject)
        }
      
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