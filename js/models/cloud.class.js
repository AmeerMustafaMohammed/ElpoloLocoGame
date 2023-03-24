class Cloud extends MovableObject {
    y = 0
    height = 350
    width = 600;
    constructor() {
        super().loadImage("img/5_background/layers/4_clouds/1.png")
        this.x = Math.random() * 500;
        this.width = 500;
        this.animateCloud()
    }

    animateCloud(x) {
        let changer = 0.15
        setInterval(() => {
            this.x -= changer;
            if (this.x < 1) {
                changer = changer * -1;
            }
            if (this.x > 600) {
                changer = changer * -1;
            }

        }, 1000 / 60)

    }
}