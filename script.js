// let canvas = new Canvas();
let player = new Player(100, 100, 10, 10);
player.draw();

//
let yPos = Math.floor(Math.random() * (canvas.el.height-10)+1);
let xPos = Math.floor(Math.random() * (canvas.el.width-10)+1);
console.log(yPos, xPos);
let monster = new Monster(xPos, yPos);

monster.spawn();
