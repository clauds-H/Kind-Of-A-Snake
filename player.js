class Player extends Canvas{
    constructor(x, y, width, height){
        super();
         this.x = x;
         this.y = y;
         this.height = height;
         this.width = width;
         
    }
    draw(){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    clear(){
        this.ctx.clearRect(this.x, this.y+10, this.width, this.height);
      }
}

class Monster extends Canvas{
    constructor(posx, posy){
        super();
        this.posx = posx;
        this.posy = posy;
    
    }
    spawn(){
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.posx, this.posy, 10, 10);
    }
}