class World {
    ctx;
    canvas;
    keyboard;
    backgroundobjects = [
        new Backgroundobject("img/5_background/layers/air.png"),
        new Backgroundobject("img/5_background/layers/3_third_layer/1.png"),
        new Backgroundobject("img/5_background/layers/2_second_layer/1.png"),
        new Backgroundobject("img/5_background/layers/1_first_layer/1.png")
    ]
    clouds = [
        new Cloud()
    ]
    characters = [
        new Character(keyboard)
    ]
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ]


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d')
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw()
        this.setKeyboardForEntities()
    }

    draw() {
        this.clearCanvas()
        this.drawObjects(this.backgroundobjects)
        this.drawObjects(this.clouds)
        this.drawObjects(this.characters)
        this.drawObjects(this.enemies)
        this.reDraw()
    }

    setKeyboardForEntities() {
        this.characters.forEach(character => character.keyboard = this.keyboard)
        this.enemies.forEach(enemy => enemy.keyboard = this.keyboard)
    }
    /**
        * Schedule a redraw of the current object using `requestAnimationFrame()`.
        * This method is typically used to schedule a redraw of a canvas or other graphical element.
    */

    reDraw() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    drawObjects(objects) {
        objects.forEach(object => this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height))
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


}