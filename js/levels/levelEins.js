
const levelEins= new Level(
    backgroundobjects = [
        new Backgroundobject("img/5_background/layers/air.png",-719),
        new Backgroundobject("img/5_background/layers/3_third_layer/2.png",-719),
        new Backgroundobject("img/5_background/layers/2_second_layer/2.png",-719),
        new Backgroundobject("img/5_background/layers/1_first_layer/2.png",-719),

        new Backgroundobject("img/5_background/layers/air.png",0),
        new Backgroundobject("img/5_background/layers/3_third_layer/1.png",0),
        new Backgroundobject("img/5_background/layers/2_second_layer/1.png",0),
        new Backgroundobject("img/5_background/layers/1_first_layer/1.png",0),

        new Backgroundobject("img/5_background/layers/air.png",719),
        new Backgroundobject("img/5_background/layers/3_third_layer/2.png",719),
        new Backgroundobject("img/5_background/layers/2_second_layer/2.png",719),
        new Backgroundobject("img/5_background/layers/1_first_layer/2.png",719),

        new Backgroundobject("img/5_background/layers/air.png",719*2),
        new Backgroundobject("img/5_background/layers/3_third_layer/1.png",719 *2),
        new Backgroundobject("img/5_background/layers/2_second_layer/1.png",719*2),
        new Backgroundobject("img/5_background/layers/1_first_layer/1.png",719*2),
        new Backgroundobject("img/5_background/layers/air.png",719*3),
        new Backgroundobject("img/5_background/layers/3_third_layer/2.png",719*3),
        new Backgroundobject("img/5_background/layers/2_second_layer/2.png",719*3),
        new Backgroundobject("img/5_background/layers/1_first_layer/2.png",719*3),

        
    ],
    clouds = [
        new Cloud()
    ],
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken()
    ]
    ,
    specialEnemies = [
        new Endboos()
    ],
    lifebar = [new LifeBar(),new BigBossLifeBar()],
    coinbar = [new CoinBar()],
    bottelbar = [new BottleBar()],
    
);

