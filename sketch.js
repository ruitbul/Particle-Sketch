particles = [];


function setup(){
  createCanvas(500, 600);
  
  for(i =0; i < 50; i++){
    particles.push(new Particle());
  }
  
  
  
}

function draw(){
  background(255);
  particles.forEach((p, index) => {
  p.move();
  p.draw();
  p.edges();
  });
  
}

class Particle{
  constructor(){
    this.position = createVector(random(height), random(width));
    this.size = 10;
    this.velocity = createVector(random(-5,5), (-5, 5));
    
    
  }
  
  move(){
    this.position.add(this.velocity);
    
  }
  
  draw(){
    fill(0);
    circle(this.position.x, this.position.y, this.size)
  }
  
  
  edges(){
    if(this.position.x < 0 || this. position. x > width){
      this.velocity.x *= -1
    }
    if(this.position.y < 0 || this. position. y > height){
      this.velocity.y *= -1
    }
  }
  
}

