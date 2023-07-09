class Level{
    backgroundobjects;
    clouds;
    enemies;
    lifebar;
    coinbar;
    level_end_x = 719*3 + 80;
    constructor(backgroundobjects,clouds,enemies,lifebar,coinbar,bottelbar){
        this.backgroundobjects=backgroundobjects;
        this.clouds = clouds;
        this.enemies = enemies;
       
        this.lifebar = lifebar;
        this.coinbar = coinbar;
        this.bottelbar = bottelbar;
    }
}