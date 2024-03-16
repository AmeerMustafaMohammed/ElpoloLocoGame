
class Chicken extends MovableObject {
    y = 330;
    height = 100;
    width = 80;
    deadAudio = new Audio("Audio/chicken.wav")
    IMAGE_WALKING = [
        "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
    ];
    IMAGE_DEAD = "img/3_enemies_chicken/chicken_normal/2_dead/dead.png";
    

    constructor() {
        super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png")
        this.initiateObject()
    }

    initiateObject(){
        this.loadImages(this.IMAGE_WALKING)
        //this.loadImages(this.IMAGE_DEAD)
        this.x = 400 + Math.random() * 2500;
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
            
          },1000/60)
          this.pushIntervalIds(intervalID)
          this.playAnimation(this.IMAGE_WALKING)
    }

    isDead(){
        this.loadImage(this.IMAGE_DEAD)
        this.y += 30;
        this.playSound(this.deadAudio)
    }

}


