class Log {
    constructor (x,y,width,height){
        var options = {
            isStatic:true
                
               /* 'restitution':0.3,
                'friction':0.5,
                'density':1.2*/
            }
            this.body = Bodies.rectangle(x,y,width,height,options);
            this.width = width;
            this.height = height;
           // Matter.Body.setAngle(this.body,angle);
            World.add(world,this.body);
        }
        display(){
            var pos=this.body.position;
            //var angle =this.body.angle;
            console.log(pos.x)
           /* push();
            translate(pos.x,pos.y);*/
            //rotate(angle);
          rectMode(CENTER);
            strokeWeight(4);
            stroke("green");
            fill("red");
            rect(pos.x,pos.y,this.width,this.height);
           // pop();
    
    }
}