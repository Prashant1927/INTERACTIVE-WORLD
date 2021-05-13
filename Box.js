class Box
{
    constructor(x,y,width,height)
    {
        var option={
          density : 0.8,
          friction : 1,
            'restitution' : 0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
        var pos=this.body.position;
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height); 
    }

    display()
    {
      push()
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height); 

      pop()
         
    }
}

