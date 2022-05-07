// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number




// function to generate random color



function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball{
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
        this.colisions = 0
        this.borda = random(0,1)
        this.zeroOuUm = random(0,1)
    }

    multiply(b1,b2){
    }

    bananaDraw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 0.5 * Math.PI);
        ctx.fill();  
      }

      draw(){
        ctx.beginPath();
        ctx.strokeStyle = this.color
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);

        if(this.borda){ctx.stroke()}else{ctx.fill();}
      }

      update(){
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
          this.x = width - this.size - 1
          cannabrick(this)
        }
      
        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
          this.x = this.size + 1
          cannabrick(this)

        }
      
        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
          this.y = height - this.size - 1
          cannabrick(this)
        }
      
        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
          this.y = this.size + 1
          cannabrick(this)
        }
      
        this.x += this.velX;
        this.y += this.velY;
      }
      
      collisionDetect(){
        for (let j = 0; j < balls.length; j++) {
          if (!(this === balls[j])) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + balls[j].size) {
              mudaRotaMudaCor(balls[j],this)
              colisioned()
              addBallColisionCounter(this,balls[j])
            }
          }
        }
      }
}
class Square extends Ball{
  constructor(x, y, velX, velY, color, size){
    super(x, y, velX, velY, color, size)
  }

  draw(){
    ctx.beginPath();
    ctx.strokeStyle = this.color
    ctx.fillStyle = this.color
    if(this.borda){
      ctx.strokeRect(this.x, this.y, this.size, this.size, this.color)
    } else{
    ctx.fillRect(this.x, this.y, this.size, this.size, this.color)
  }    
    ctx.fill();
  }
}
class Hackier extends Ball{
  constructor(x, y, velX, velY, color, size){
    super(x, y, velX, velY, color, size)
  }

  draw(){
    ctx.beginPath()
    ctx.fillStyle = 'rgb(0,255,0)'
    ctx.font = `bold ${this.size*2}px serif`
    if(this.zeroOuUm==0){ctx.fillText('0',this.x,this.y)}else{
    ctx.fillText('1',this.x,this.y)}
  }
  collisionDetect(){
    for (let j = 0; j < balls.length; j++) {
      if (!(this === balls[j])) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {

          ballHacked(balls[j])
          mudaRotaMudaCor(balls[j],this)
          colisioned()
          addBallColisionCounter(this,balls[j])
        }
      }
    }
  }

}


  function mudaRotaMudaCor(ball1,ball2){
      if(!isCannabied){
        changeColor(ball1,ball2)

        ball1.velX = -(ball1.velX)
        ball2.velX = -(ball2.velX)
        ball1.velY = -(ball1.velY)
        ball2.velY = -(ball2.velY)

        ball1.x += 2*ball1.velX
        ball2.x += 2*ball2.velX
        ball1.y += 2*ball1.velY
        ball2.y += 2*ball2.velY
      }else{
            cannabisRota(ball1,ball2)
    }
  }



  let balls = [];
while (balls.length < 5) {
  addQuicker(Square)
  addQuicker()
}
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.275)';//0,09
    ctx.fillRect(0, 0, width, height);
  

    balls.forEach(ball=>{
      
      if(isBananed){
          ball.bananaDraw()
      }else{ball.draw();}
  
      if(!isGhosted){
          ball.collisionDetect()
      }
  
    ball.update();
    })
      
    requestAnimationFrame(loop);
  }
  loop()