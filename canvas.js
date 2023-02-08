class Canvas{
    constructor(){
        this.el = document.getElementById('canvas');
        this.ctx = this.el.getContext('2d');
        this.el.height = 200;
        this.el.width = 400;
        this.gridSize = 10;
    }

    getCtx() {
        return this.ctx;
    }
    getGridSize(){
        return this.gridSize;
    }

    clearRect(x, y, w, h){
        ctx.clearRect(x, y, w, h);
    }
}