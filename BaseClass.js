class BaseClass{//creating a class
    constructor(x, y, width, height, angle) {//this used to pass arguments to the constructor
        var options = {//setting different properties for the body
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);//creating a rect for the body
        this.width = width;//setting the width of body to the width passed as argument
        this.height = height;//setting the height of body to the height passed as argument
        this.image = loadImage("sprites/base.png");//loading an image for our body
        World.add(world, this.body);//body added into the world
      }
      display(){
        var angle = this.body.angle;//setting angle to body's angle
        push();
        translate(this.body.position.x, this.body.position.y);//shift to body hrizontaly by y and x position
        rotate(angle);//body rotated by the angle
        imageMode(CENTER);//image mode taken as center
        image(this.image, 0, 0, this.width, this.height);//image displayed
        pop();//so that the the orientation of the body does not remain tilted always
      }
}