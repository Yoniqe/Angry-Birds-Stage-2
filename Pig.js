class Pig extends BaseClass {//class extended from baseclass(inheritance)
    constructor(x, y) {//this takes x,y as arguments to the constructor
      super(x,y,50,50);//passed the arguments to the baseclass class
      this.image = loadImage("sprites/enemy.png");//image added
    
  }
};
  