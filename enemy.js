class Enemy{
    constructor(){
        this.position = {
            x: Math.random() * (canvas.width - 50 - 10) + 10,
            y: -12,
          };
      
          this.velocity = {
            x: 0,
            y: 1,
          };
      
          this.size = Math.random() * (90 - 40) + 40;
          this.image = new Image();
          this.image.src = "./spider.png";
    }


    draw() {
        c.beginPath();
        c.fillStyle = "red";
        c.drawImage(
          this.image,
          this.position.x,
          this.position.y,
          this.size,
          this.size
        );
      }


      move() {
        this.position.y += this.velocity.y;
      }

      //collsion check with player
      collisionWithPlayer(rocket) {
        if (
          this.position.x + this.size >= rocket.position.x &&
          this.position.x <= rocket.position.x + rocket.size &&
          this.position.y + this.size >= rocket.position.y &&
          this.position.y <= rocket.position.y + rocket.size
        ) {
          rocket.isAlive = false;
        }
      }

      //collision check with bullets
      collisionWithBullet(bullets) 
      {
        for (let i = 0; i < bullets.length; i++) {
          if (
            this.position.x + this.size >= bullets[i].position.x &&
            this.position.x <= bullets[i].position.x + bullets[i].size &&
            this.position.y + this.size >= bullets[i].position.y &&
            this.position.y <= bullets[i].position.y + bullets[i].size
          ) {
            this.velocity.y = 0;
            this.position.x = -100;
            this.position.y = -100;
            gameScore=gameScore+10;
          }
        }
      }

      update() {
        this.draw();
        
        if (rocket.isAlive) {
            this.move();
          }else
          {
            c.beginPath();
     c.fillStyle='white';
     c.font='40px black cencery';
     c.fillText("Game over", canvas.width/2.3,canvas.height/2);
     c.fillText("Your Score: "+gameScore, canvas.width/2.6,(canvas.height/2)+30);
          }
    
      }
}
