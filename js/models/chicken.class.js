
class Chicken extends MovableObject {
    y = 330;
    height = 100;
    width = 80;
    deadAudio = new Audio("Audio/dead.mp3")
    IMAGE_WALKING = [
        "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
    ];
    IMAGE_DEAD = [
        "img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
    ]

    constructor() {
        super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png")
        this.loadImages(this.IMAGE_WALKING)
        this.loadImages(this.IMAGE_DEAD)
        this.x = 100 + Math.random() * 2000; //min 200 max /700

        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
            this.walking() 
    }
    walking(){
      let intervalID = setInterval(()=>{
            if(!this.dead){
                this.moveleft() 
            }else{
                this.stopObjectAnimation()
               this.isDead()
               
            }
            
            console.log("1 ")
          },1000/60)
          this.pushIntervalIds(intervalID)
          this.playAnimation(this.IMAGE_WALKING)

    }

    isDead(){
        this.loadImage("img/3_enemies_chicken/chicken_normal/2_dead/dead.png")
        this.y += 30;
    }

    playDeadSound(){
        this.deadAudio.play()
        console.log("sound playes")
    }
   /*  dead() {
        this.currentImage = 0;
        setInterval(() => {
            let i = this.currentImage % this.IMAGE_DEAD.length
            console.log(i)
            this.img = this.imageCache[this.IMAGE_DEAD[i]]
            this.currentImage++
            console.log("currentImage", this.currentImage)

        }, 1000)
    }

    eat() {
        console.log("Eat")
    } */
}


