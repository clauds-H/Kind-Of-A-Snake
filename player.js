class Player {
    constructor(x, y, width, height){
         this.x = x;
         this.y = y;
         this.height = height;
         this.width = width;
         this.position = [[x, y]];
         this.playerLength = this.position.length;
         this.directions = ['left', 'down', 'right', 'up'];
         this.direction = '';
    }
    switchDirection(newDirection){
        if(this.direction == ''){
            this.direction = newDirection;
        }else{
            let newInd = this.directions.indexOf(newDirection);
            let oldInd = this.directions.indexOf(this.direction);
            let diff = Math.abs(oldInd-newInd);
            if(diff !== 2){
                this.direction = newDirection;
            }
        }

    }
    update(){
        switch(player.direction){
            case 'up':
                player.y-=10;
                this.borderCheck('y');
                break;
            case 'down':
                player.y+=10;
                this.borderCheck('y');
                break;
            case 'left':
                player.x-=10;
                this.borderCheck('x');
                break;
            case 'right':
                player.x+=10;
                this.borderCheck('x');
                break;
            default:
                throw new Error('direction is: ' + direction);
        }
    }
    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    borderCheck(direction){
        if(direction == 'x'){
            if(player.x<0){
                player.x = canvas.el.width-Math.abs(player.x);
            }
            if(player.x >= canvas.el.width){
                player.x = 0;
            } 
        }
        else{
            if(player.y<0){
                player.y = canvas.el.height-Math.abs(player.y);
            }
            if(player.y >= canvas.el.height){
                player.y = 0;
            } 
        }
    } 
    updatePos(){
        let arr = [this.x, this.y];
        //no collision with self
        if(!arrayIn2Dim(this.position, arr)){
            this.position.push([this.x, this.y]);
            //no collision with monster
            if(!(this.x == monster.posx && this.y == monster.posy)){
                this.delOldPos();
            }else{
                monster.generate();
                score.updateScore();
            }
        }else{
            reset();
        }
      }
    delOldPos(){
        let del = this.position.shift();
        canvas.clearRect(del[0], del[1], canvas.gridSize, canvas.gridSize);
    }
}

class Monster {
    constructor(posx, posy){
        this.posx = posx;
        this.posy = posy;
        this.size = canvas.getGridSize();
    }
    spawn(){
        //does not spawn inside player
        let temp = [this.posx, this.posy];
        if(!arrayIn2Dim(player.position, temp)){
            ctx.fillStyle = "green";
            ctx.fillRect(this.posx, this.posy, this.size, this.size);
        }else{
            this.generate();
        }
    }
    generate(){
        this.posy = Math.floor(Math.random() * (canvas.el.height/10-canvas.getGridSize()))*10;
        this.posx = Math.floor(Math.random() * (canvas.el.width/10-canvas.getGridSize()))*10;
        this.spawn();
    }
}
class Display{
    constructor(){
        this.score = 0;
    }
    updateScore(){
        this.score++;
        this.displayScore();
    }
    resetScore(){
        this.score = 0;
        this.displayScore();
    }
    displayScore(){
        document.getElementById('score').textContent = this.score;
    }
}