let canvas = new Canvas();
let player = new Player(100, 100, 10, 10);
player.draw();


let yPos = Math.floor(Math.random() * this.canvas.height+1);
let xPos = Math.floor(Math.random() * this.canvas.width+1);
//console.log(yPos, xPos);
let monster = new Monster(xPos, yPos);

monster.spawn();
