class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':0.4,
        'density':0.5
    }
    this.visibility=255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("sprites/enemy.png");

    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    if(this.body.speed<3){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("lavender");
    fill("pink");
    rect(0, 0, this.width, this.height);
    this.visibility=this.visibility-5;
    pop();
    
    }else{
      World.remove(world,this.body);
      tint(255,this.visibility,)
    }

    
    
  }

  score(){
    if(this.visibility<0 && this.visibility >=105){
        score=+1;
    }
}};