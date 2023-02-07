class Player extends Canvas{
    constructor(x, y, width, height){
        super();
         this.x = x;
         this.y = y;
         this.height = height;
         this.width = width;
         
    }
    draw(){
        this.ctx.fillStyle = "FF0000";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    clear(){
        this.ctx.clearRect(this.x, this.y+10, this.width, this.height);
      }
}