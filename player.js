class Player {
    constructor(x, y, width, height){
         this.x = x;
         this.y = y;
         this.height = height;
         this.width = width;
         this.currentPos = [x, y];
    }
    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
}

class Monster {
    constructor(posx, posy){
        this.posx = posx;
        this.posy = posy;
        this.size = canvas.getGridSize();
    }
    spawn(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.posx, this.posy, this.size, this.size);
    }
}