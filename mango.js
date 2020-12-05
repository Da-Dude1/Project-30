class Mango{
    constructor(x,y,width,height){
        var options ={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.image=loadImage("square.png")
        World.add(world, this.body);
        this.visibility=255
    }
    display(){
        if (this.body.speed<3) {
            var pos= this.body.position 
            imageMode(CENTER);
            image(this.image, pos.x, pos.y, this.width, this.height);
    
        }
        if (this.body.speed>3) {
            World.remove(world,this.body)
            push()
            this.visibility=this.visibility-5 
            tint(255,this.visibility)
            image(this.image,this.body.position.x,this.body.position.y,30,40)
            pop()
    }
    }

}