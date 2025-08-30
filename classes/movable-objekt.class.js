class MovableObject {
  x = 120;
  y = 200;
  img = null;
  imageCache = {};
  currentImage = 0;

  loadImage(path) {                // ← Methode (Funktion in der Klasse)
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    if (this.img) ctx.drawImage(this.img, this.x, this.y);
  }

}
