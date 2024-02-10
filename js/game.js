let world;
let canvas;
allIntervals = [];
let keyboard = new Keyboard();



function startMyGame(){
    showCanvas();
    world = new World(canvas, keyboard)
    hideStartBackground();
   
}

function showCanvas(){
    document.getElementById("start-button").blur();
    canvas = document.getElementById("canvas")
    canvas.style.display = "block";
}

function hideStartBackground(){
    startScreen = document.getElementById("start-screen")
    startScreen.style.display = "none";
}

function pauseGame(){
    console.log("All Interwals " , allIntervals)
    allIntervals.forEach((e)=>{
            clearInterval(e)
        })
            
}


function saveIntervalId(id){
    allIntervals.push(id)
  }

function  setStopableInterval(fn,time){
    let intervalId = setInterval(fn,time)
    saveIntervalId(intervalId)
}

document.addEventListener("keydown", (event) => {

    let pressedKeyCode = event.keyCode;

    if (pressedKeyCode == 40) {
        keyboard.DOWN = true
    }
    if (pressedKeyCode == 38) {
        keyboard.UP = true
    }

    if (pressedKeyCode == 37) {
        keyboard.LEFT = true
    }
    if (pressedKeyCode == 39) {
        keyboard.RIGHT = true
    }
    if (pressedKeyCode == 32) {
        keyboard.SPACE = true
    }
    if (pressedKeyCode == 68) {
        keyboard.D = true
    }

})


document.addEventListener("keyup", (event) => {

    let pressedKeyCode = event.keyCode;

    if (pressedKeyCode == 40) {
        keyboard.DOWN = false
    }
    if (pressedKeyCode == 38) {
        keyboard.UP = false
    }

    if (pressedKeyCode == 37) {
        keyboard.LEFT = false
    }
    if (pressedKeyCode == 39) {
        keyboard.RIGHT = false
    }
    if (pressedKeyCode == 32) {
        keyboard.SPACE = false
    }
    if (pressedKeyCode == 68) {
        keyboard.D = false
       
    }

})

/* 
DOWN = 40;
UP = 38;
LEFT = 37;
RIGHT = 39;
SPACE = 32;

*/


/* OLD CODE */
/* 

function changeEmemyPlace(world) {

    for (let i = 0; i < 2; i++) {
        world.enemies[i].x = makeRandomNumber()
    }

}

function makeRandomNumber() {
    return Math.floor(Math.random() * 300)
}
let changePictor

function moveCharackter(step) {

    console.log(world)
    world.charackter.x += step;
    let i = 1;
    changePictor = setInterval(function () {
        world.charackter.img.src = `../img/2_character_pepe/2_walk/W-${20 + i}.png`
        i++
        if (i == 3) {
            i = 1;
        }
    }, 800)


}

document.addEventListener('keydown', (event) => {
    let step = 4;
    console.log(event)
    console.log(event.key)
    if (event.key == 'ArrowRight') {
        moveCharackter(step)
    }


})


document.addEventListener('keyup', () => {

    clearInterval(changePictor)
    console.log("UP")
})

/*  ctx = canvas.getContext('2d')
       ctx.drawImage(src, x, y, 200, 300)
       setTimeout(function () {
 
       }, 1000)
 
       console.log("image drowing") */

/* 

       setTimeout(function () {
        world.charackter.x = 300;
        world.charackter.width = 30;
        world.enemies[1].x = 200;

    }, 1000)

    setTimeout(function () {
        world.charackter.x = 400;
        world.enemies[1].x = 50;

    }, 2000)
 */ 