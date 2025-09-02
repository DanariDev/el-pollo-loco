class Chicken extends MovableObject {
  constructor() {
    super();
    this.loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.x = 700 + Math.random() * 200; 
    this.y = 240;
    this.width = 100;
    this.height = 110;
  }
}
