class Player {
    constructor(x, y, width, height){
         this.x = x;
         this.y = y;
         this.height = height;
         this.width = width;
         this.directions = ['left', 'down', 'right', 'up'];
         this.direction = this.directions[0];
    }
    switchDirection(newDirection){
        let newInd = this.directions.indexOf(newDirection);
        let oldInd = this.directions.indexOf(this.direction);
        let diff = Math.abs(oldInd-newInd);
        if(diff !== 2){
            this.direction = newDirection;
        }
    }
    update(){
        switch(player.direction){
            case 'up':
                player.y-=10;
                break;
            case 'down':
                player.y+=10;
                break;
            case 'left':
                player.x-=10;
                break;
            case 'right':
                player.x+=10;
                break;
            default:
                throw new Error('direction is: ' + direction);
        }
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