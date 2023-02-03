class World {
    ctx;
    canvas;
    enemies = [
        new Chicken(150, 200),
        new Chicken(100, 200),
        new Chicken(300, 200)
    ]
    character = new Character(0, 0);

    constructor(canvas) {

        this.ctx = canvas.getContext('2d')
        this.canvas = canvas;
        this.draw()
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawCharackter()
        this.drawEnemies()
        console.log("drawing")


        //Reloading draw function again
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    drawCharackter() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.heigth)
    }

    drawEnemies() {
        this.enemies.forEach(enemy =>
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.heigth)
        )
    }
}