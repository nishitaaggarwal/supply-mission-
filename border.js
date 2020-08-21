class bordern{
  
    constructor(x,y,w,h)
    {
     this.borders= Bodies.rectangle(x ,y ,w, h)
    this.width=w
    this.height=h
     World.add(world,this.borders)
    }
    display() { 
  fill("red")
 rectMode(CENTER)
  rect(this.borders.position.x,this.borders.position.y,this.width,this.height)

    }

}
