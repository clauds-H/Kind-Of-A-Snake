//program
var canvas = new Canvas();
var ctx = canvas.getCtx();

//red player
let player = new Player(100, 100, 10, 10);
player.draw();

//green Monster
let monster = new Monster(generateRandomPos(canvas.el.width), generateRandomPos(canvas.el.height));
monster.spawn();

//score
let score = new Display(0);

//key action
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

///////////////////////////////////////
function generateRandomPos(x){
    let pos = Math.floor(Math.random() * (x/10-canvas.getGridSize()))*10;
    return pos;
  }

function reset(){
    canvas.clearRect(0, 0, canvas.el.width, canvas.el.height);
    score.resetScore();
    player = new Player(100, 100, 10, 10);
    player.draw();
    monster = new Monster(generateRandomPos(canvas.el.width), generateRandomPos(canvas.el.height));
    monster.spawn();
}

function arrayIn2Dim(arr, newArr){
    return arr.filter(x => x[0]== newArr[0] && x[1]==newArr[1]).length>0;
}

////////////////////////////////////////
setInterval(function(){
    //next pos
    player.update();
    //border-check
    if(player.x >= canvas.el.width || player.x < 0 || player.y < 0 || player.y >= canvas.el.height){
        reset();
    }else{
        player.draw();
        player.updatePos();
    }
    
}, 200);


/*
TODO:

*/