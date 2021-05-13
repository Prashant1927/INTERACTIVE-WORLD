class Ground
{
    
    constructor(x,y,width,height)
    {
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height; 
        var option={
         isStatic : true
        }
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.body.position;
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);    
    }
}