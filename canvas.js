class Canvas{
    constructor(){
        this.el = document.getElementById('canvas');
        this.ctx = this.el.getContext('2d');
        this.el.height = 200;
        this.el.width = 400;

        
    }
    drawObjects(){
    }

    getCtx() {
        return this.ctx;
    }
}