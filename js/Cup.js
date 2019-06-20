class Cup {
    constructor(initialX, initialY, color) {
    this.radius = 50;
    this.x = initialX;
    this.y = initialY;
    this.vx = Math.floor(Math.random()*20);
    this.vy = Math.floor(Math.random()*20);
    this.color = color;
  }

  draw(ctx) {
    ctx.save();

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  
  update() {
    this.x += this.vx;
    this.y += this.vy;

    this.vx += Math.random() - 0.5
    this.vy += Math.random() - 0.5

    if (this.right() > CANVAS_WIDTH || this.left() < 0) {
      this.vx *= -1
    }
    if (this.bottom() > CANVAS_HEIGHT) {
      this.vy = -15
    }
    if (this.top() < 0) {
      this.vy = Math.abs(this.vy)
    }
  
}

top() { return this.y - this.radius }
bottom() { return this.y + this.radius }
left() { return this.x - this.radius }
right() { return this.x + this.radius }

}