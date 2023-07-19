class BottleBar extends StatusBar{

    IMAGES = [
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
       
    ]
    constructor(){
        super().loadImage("img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png")
        this.loadImages(this.IMAGES)
        this.percentage = 0;
        this.percentageModifier = 20;
        this.x = 30;
        this.y = 95 ;
        this.height = 60;
        this.width = 200;
    }
}