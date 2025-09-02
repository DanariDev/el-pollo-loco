class Cloud extends MovableObject {
  constructor(type = 1) {
    super();

    
    if (type === 1) {
      this.loadImage("img/5_background/layers/4_clouds/1.png");
    } else {
      this.loadImage("img/5_background/layers/4_clouds/2.png");
    }

    this.x = 300 + Math.random() * 300; 
    this.y = 40 + Math.random() * 80;   
    this.width = 300;
    this.height = 150;
  }
}
