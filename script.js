//program
var canvas = new Canvas();
var ctx = canvas.getCtx();

let player = new Player(100, 100, 10, 10);
player.draw();

//green Monster
let monster = new Monster(generateRandomPos(canvas.el.width), generateRandomPos(canvas.el.height));
monster.spawn();


document.onkeydown = function(event) {
    var keyCode;
  
    if(event == null)
    {
      keyCode = window.event.keyCode;
    }
    else
    {
      keyCode = event.keyCode;
    }
  
    switch(keyCode)
    {
      // left
      case 37:
        // action when pressing left key
        player.switchDirection('left');
        break;
  
      // up
      case 38:
        // action when pressing up key
        player.switchDirection('up');
        break;
  
      // right
      case 39:
        // action when pressing right key
        player.switchDirection('right');
        break;
  
      // down
      case 40:
        // action when pressing down key
        player.switchDirection('down');
        break;
  
      default:
        console.log('i cant switch directions');
        break;
    }
  }

function generateRandomPos(x){
    //let yPos = Math.floor(Math.random() * (canvas.el.height/10-canvas.getGridSize()))*10;
    //let xPos = Math.floor(Math.random() * (canvas.el.width/10-canvas.getGridSize()))*10;
    //console.log('pos monster: ' + yPos, xPos);
    let pos = Math.floor(Math.random() * (x/10-canvas.getGridSize()))*10;
    return pos;
  }

function reset(){
    canvas.clearRect(0, 0, canvas.el.width, canvas.el.height);
}

setInterval(function(){
    //next pos
    player.update();
    //border-check
    if(player.x >= canvas.el.width || player.x <= 0 || player.y <= 0 || player.y >= canvas.el.height){
        reset();
    }else{
        player.draw();
        player.updatePos();
    }
    
}, 500);

//deletion
//ctx.clearRect(monster.posx, monster.posy, monster.size, monster.size);
