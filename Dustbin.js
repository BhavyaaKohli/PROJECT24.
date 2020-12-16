class Dustbin {
    constructor(x,y){
 var option = {
 isStatic : true

 }
   this.middle  =  Bodies.rectangle(x,y,200,20,option)
   this.left    =  Bodies.rectangle(x-110,y-100,20,200,option)
   this.right   =  Bodies.rectangle(x+110 ,y-100,20,200,option)
   World.add(world , this.middle)
   World.add(world , this.left)
   World.add(world , this.right)
   
    }

    display(){
   var mpos =this.middle.position
   var lpos =this.left.position
   var rpos =this.right.position


   push()
   rectMode(CENTER)
   fill("yellow")
    rect(mpos.x , mpos.y,200,20)
   pop();

   push()
   rectMode(CENTER)
   fill("yellow")
    rect(lpos.x , lpos.y,20,200)
   pop();
   
   push()
   rectMode(CENTER)
   fill("yellow")
    rect(rpos.x , rpos.y,20,200)
   pop();
    }


}


