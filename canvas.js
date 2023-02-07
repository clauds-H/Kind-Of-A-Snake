class Canvas{
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.height = 200;
        this.canvas.width = 400;
        this.canvas.style.border = '1px solid #000';
        this.ctx.fillStyle = "FF0000";
    }
}