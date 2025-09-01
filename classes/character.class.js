class Character extends MovableObject {
  constructor() {
    super();
    this.loadImage("img/2_character_pepe/2_walk/W-21.png");
    this.x = 120;
    this.y = 200;
    this.width = 100;
    this.height = 150;
  }

  jump() {}
}
