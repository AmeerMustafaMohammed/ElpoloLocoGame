class Level{
    backgroundobjects;
    clouds;
    enemies;
    level_end_x = 719*3 + 80;
    constructor(backgroundobjects,clouds,enemies){
        console.log("NWE LEVEL")
        this.backgroundobjects=backgroundobjects;
        this.clouds=clouds;
        this.enemies=enemies;
    }
}