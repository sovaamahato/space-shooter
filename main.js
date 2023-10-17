let canvas=document.getElementById("canvas");
let c=canvas.getContext("2d");

let gameScore =0;

const rocket =new Rocket();

let bulletHaru=[];

//for enemies
let enemies = [];

setInterval(() => {
  const enemy = new Enemy();
  enemies.push(enemy);
}, 2000);
const enemy=new Enemy();






function loop(){
    c.clearRect(0,0,canvas.width,canvas.height);

     //game score 
     c.beginPath();
     c.fillStyle='white';
     c.font='30px';
     c.fillText("Score"+gameScore, 10,40);
    
rocket.update();
//enemies haru
for (let i = 0; i < enemies.length; i++) {
    enemies[i].update();
    enemies[i].collisionWithPlayer(rocket);
    enemies[i].collisionWithBullet(bulletHaru);
  }
  //bullets 
for(let i=0;i<bulletHaru.length;i++){
    bulletHaru[i].update();


}
enemy.update();



    window.requestAnimationFrame(loop);
}

loop();


//controlling the rocket box with arrow keys of keyboard
document.addEventListener('keydown',(e)=>{
    if(e.code=="ArrowUp")rocket.velocity.y=-5;
    if(e.code=="ArrowDown")rocket.velocity.y=5;
    if(e.code=="ArrowLeft")rocket.velocity.x=-5;
    if(e.code=="ArrowRight")rocket.velocity.x=5;
    if(e.code=="Space"){
        bulletHaru.push(new Bullet(rocket.position.x + rocket.size / 2.8, rocket.position.y));
        
    }
    
});


document.addEventListener('keyup',(e)=>{
    if(e.code=="ArrowUp")rocket.velocity.y=0;
    if(e.code=="ArrowDown")rocket.velocity.y=0;
    if(e.code=="ArrowLeft")rocket.velocity.x=0;
    if(e.code=="ArrowRight")rocket.velocity.x=0;
    
});
