class World {
    ctx;
    canvas;
    backgroundobjects = [
        new Backgroundobject("img/5_background/layers/air.png"),
        new Backgroundobject("img/5_background/layers/3_third_layer/1.png"),
        new Backgroundobject("img/5_background/layers/2_second_layer/1.png"),
        new Backgroundobject("img/5_background/layers/1_first_layer/1.png")
    ]
    clouds = [
        new Cloud()
    ]
    character = [
        new Character(0, 0)
    ]
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ]


    constructor(canvas) {
        this.ctx = canvas.getContext('2d')
        this.canvas = canvas;
        this.draw()
        console.log(this.backgroundobjects)
        console.log(this.enemies)

    }

    draw() {
        this.clearCanvas()
        this.drawObjects(this.backgroundobjects)
        this.drawObjects(this.clouds)
        this.drawObjects(this.character)
        this.drawObjects(this.enemies)
        this.reDraw()
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