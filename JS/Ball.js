class Ball{
    constructor(x,y,w,h){
        var options = {
            restitution:0.8
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w;
        this.h = h;
        World.add(world, this.body)
    }
    show(){
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        rect(pos.x,pos.y, this.w, this.h);
        pop();
    }
} 



