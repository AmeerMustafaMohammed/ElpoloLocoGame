class Level{
    backgroundobjects;
    clouds;
    enemies;
    specialEnemies;
    lifebar;
    coinbar;
    characters;
    level_end_x = 719*3 + 80;
    constructor(backgroundobjects,clouds,enemies,specialEnemies,lifebar,coinbar,bottelbar, characters){
        this.backgroundobjects=backgroundobjects;
        this.clouds = clouds;
        this.enemies = enemies;
         this.specialEnemies = specialEnemies;
        this.lifebar = lifebar;
        this.coinbar = coinbar;
        this.bottelbar = bottelbar;
        this. characters =  characters;
    }
}