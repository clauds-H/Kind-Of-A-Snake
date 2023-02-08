//program
var canvas = new Canvas();
var ctx = canvas.getCtx();

//red player
let player = new Player(100, 100, 10, 10);
player.draw();

//green Monster
let yPos = Math.floor(Math.random() * (canvas.el.height-canvas.getGridSize())+1);
let xPos = Math.floor(Math.random() * (canvas.el.width-canvas.getGridSize())+1);
console.log('pos monster: ' + yPos, xPos);
let monster = new Monster(xPos, yPos);
monster.spawn();

//deletion
//ctx.clearRect(monster.posx, monster.posy, monster.size, monster.size);
