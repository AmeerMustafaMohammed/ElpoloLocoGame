let world;
let canvas;
let muted = false;
allIntervals = [];
let keyboard = new Keyboard();



const jsConfetti = new JSConfetti()

function startMyGame(){
    showCanvas();
    world = new World(canvas, keyboard)
    hideStartBackground();
    hideGameOverScreen();
   
}

function showCanvas(){
    canvas = document.getElementById("canvas")
    canvas.style.display = "block";
}

function hideCanvas(){
    canvas = document.getElementById("canvas")
    canvas.style.display = "none";
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
        allIntervals=[]      
}

function GameOver(){
    pauseGame()
    hideCanvas()
    gameOverScreen = document.getElementById("game-over-container")
    console.log("gameOverScreen");
    gameOverScreen.classList.remove('d-none');
    console.log("All Interwals after game" , allIntervals)
}

function  showWinScreen(){
    setTimeout(()=>{
        console.log("YOU WON!")
        console.log(allIntervals)
    },2000)

    gameWinScreen = document.getElementById("game-win-container")
    gameWinScreen.classList.remove('d-none');
    console.log("gameOverScreen");
    jsConfetti.addConfetti().then(() => jsConfetti.addConfetti());
}
function hideGameOverScreen(){
    gameOverScreen = document.getElementById("game-over-container")
    gameOverScreen.classList.add('d-none');
}
function saveIntervalId(id){
    allIntervals.push(id)
  }

function  setStopableInterval(fn,time){
    let intervalId = setInterval(fn,time)
    saveIntervalId(intervalId)
}


function muteSounds(){
  
    if(!muted){
        muted = true;
    }else{
        muted = false;
    }
    console.log(muted)
}


document.addEventListener("keydown", (event) => {
    let pressedKeyCode = event.keyCode;

    if ([40, 38, 37, 39, 32, 68].includes(pressedKeyCode)) {
        event.preventDefault(); // Unterbricht das Standardverhalten der Taste
    }

    switch (pressedKeyCode) {
        case 40: // Unten
            keyboard.DOWN = true;
            break;
        case 38: // Oben
            keyboard.UP = true;
            break;
        case 37: // Links
            keyboard.LEFT = true;
            break;
        case 39: // Rechts
            keyboard.RIGHT = true;
            break;
        case 32: // Leertaste
            keyboard.SPACE = true;
            break;
        case 68: // D
            keyboard.D = true;
            break;
    }
});

document.addEventListener("keyup", (event) => {
    let pressedKeyCode = event.keyCode;

    if ([40, 38, 37, 39, 32, 68].includes(pressedKeyCode)) {
        event.preventDefault(); 
    }

    switch (pressedKeyCode) {
        case 40:
            keyboard.DOWN = false;
            break;
        case 38:
            keyboard.UP = false;
            break;
        case 37:
            keyboard.LEFT = false;
            break;
        case 39:
            keyboard.RIGHT = false;
            break;
        case 32:
            keyboard.SPACE = false;
            break;
        case 68:
            keyboard.D = false;
            break;
    }
});


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