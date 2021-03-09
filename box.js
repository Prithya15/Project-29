class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.2,
            friction:0.8,
            density:0.5
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.x=x
        this.y=y
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)   
        rectMode(CENTER)
        fill("green")
        rect(0,0,this.width,this.height)
        pop()
    }
    
}