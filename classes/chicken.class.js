class Chicken extends MovableObject {
  constructor() {
    super();
    this.loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.x = 950 + Math.random() * 200; 
    this.y = 200;
    this.width = 80;
    this.height = 60;
  }
}
