class Tankerhead{
    constructor(x,y,width,height){
        var opt = {
            isStatic:true
    
        }
        this.body = Bodies.rectangle(x,y,width,height,opt)
        this.width = width
        this.height = height
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position 
        var angle = this.body.angle
        angleMode(DEGREES)
        if (keyIsDown(LEFT_ARROW) && angle<=1 && angle>-28) {
             angle -= 1;
              Matter.Body.setAngle(this.body, angle); }
    
        if (keyIsDown(RIGHT_ARROW) && angle>=-28 && angle<1) {
             angle += 1;
              Matter.Body.setAngle(this.body, angle); }    




        push()  
    rect(pos.x,pos.y,this.width,this.height) 
    pop()
    }
   
    
    }
    
    
    