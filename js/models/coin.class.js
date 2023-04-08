class Coin extends CollectableObject{

    constructor(x,y){
        super();
        this.loadImage("img/8_coin/coin_1.png")
        this.x = x;
        this.y = y;
        this.height =80;
        this.width = 100;
    }
}