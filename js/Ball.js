class Ball {
  constructor(x, y, vx, vy) {
    this.radius = 25;
    this.x = x;
    this.y = y;
    this.vy = vy;
    this.vx = vx;
    this.img = new Image();
    this.img.src = "/Cups-Balls/images/circle-cropped.png" 

  }
  draw(ctx) {
    ctx.save();

    ctx.fillStyle = "#eeeeee";

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    // Picture

    ctx.translate(this.x, this.y);
    let size = 2.5 * this.radius;
    ctx.drawImage(this.img, -size / 2, -size / 2, size, size);

    ctx.restore();
  }

  update(ctx) {
    this.y += this.vy;
    this.x += this.vx;
  }
}
