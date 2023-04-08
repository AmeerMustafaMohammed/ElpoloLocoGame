class Level{
    backgroundobjects;
    clouds;
    enemies;
    icons;
    level_end_x = 719*3 + 80;
    constructor(backgroundobjects,clouds,enemies,icons){
        this.backgroundobjects=backgroundobjects;
        this.clouds=clouds;
        this.enemies=enemies;
        this.icons = icons;
    }
}