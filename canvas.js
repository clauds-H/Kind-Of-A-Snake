class Canvas{
    constructor(){
        this.el = document.getElementById('canvas');
        this.ctx = this.el.getContext('2d');
        this.el.height = 200;
        this.el.width = 400;

    }

    getCtx() {
        return this.ctx;
    }


    clearRect(x, y, w, h){
        ctx.clearRect(x, y, w, h);
    }
}