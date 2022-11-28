class World {
    ctx;
    canvas;
    enemies = [
        new Chicken(0, 0),
        new Chicken,
        new Chicken

    ]
    charackter = new Character(0, 0);

    constructor(canvas) {
        console.log(canvas.width)
        this.ctx = canvas.getContext('2d')
        this.canvas = canvas;
        this.draw()


    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawCharackter()
        this.enemies.forEach(enemy =>
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.heigth)
        )
        console.log("drawing")

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    drawCharackter() {
        this.ctx.drawImage(this.charackter.img, this.charackter.x, this.charackter.y, this.charackter.width, this.charackter.heigth)
    }
}