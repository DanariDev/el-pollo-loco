class Background extends MovableObject {
  constructor(path, x) {
    super();
    this.loadImage(path);
    this.x = x;
    this.y = 0;
    this.width = 950;
    this.height = 480;
  }

  static allLayers() {
    return [
      // Himmel (hinter allem)
      new Background("img/5_background/layers/air.png", 0),
      new Background("img/5_background/layers/air.png", 950),

      // Third Layer (ganz hinten)
      new Background("img/5_background/layers/3_third_layer/1.png", 0),
      new Background("img/5_background/layers/3_third_layer/2.png", 950),

      // Second Layer (Mittelgrund)
      new Background("img/5_background/layers/2_second_layer/1.png", 0),
      new Background("img/5_background/layers/2_second_layer/2.png", 950),

      // First Layer (ganz vorne = Boden)
      new Background("img/5_background/layers/1_first_layer/1.png", 0),
      new Background("img/5_background/layers/1_first_layer/2.png", 950),
    ];
  }
}
