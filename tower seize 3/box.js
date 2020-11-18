class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0,
            'density':1.4
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color(random(0,125),random(0,255),random(0,255));
        World.add(world, this.body);
        this.visibility= 255;
      }
      display(){
        if (this.body.speed <3 ){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill (this.color);
        rect( 0, 0, this.width, this.height);
        pop();
        }
        else {
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility -5;
          pop();
        }
      }

      score (){
        if (this.visibility<0 && this.visibility>-105){
          score++;
        }
      }
}