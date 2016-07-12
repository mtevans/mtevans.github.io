var Hazard = function(position, obstacleGraphics){
  this.graphics = obstacleGraphics;
  this.variant = Math.floor(Math.random() * 5)
  this.position = position;
  this.radius = 35;
}

Hazard.prototype.draw = function(ctx){
  
  switch (this.variant) {
    case 1:
      ctx.drawImage(
      this.graphics,
      0, 28, 30, 34,
      this.position[0], this.position[1], 30, 34
      );
      break;
    case 2:
      ctx.drawImage(
      this.graphics,
      95, 66, 32, 64,
      this.position[0], this.position[1], 32, 64
      );
      break;
    case 3:
      ctx.drawImage(
      this.graphics,
      30, 52, 23, 11,
      this.position[0], this.position[1], 23, 11
      );
      break;
    case 4:
      ctx.drawImage(
      this.graphics,
      85, 138, 15, 32,
      this.position[0], this.position[1], 15, 32
      );
      break;
  }
};



module.exports = Hazard;