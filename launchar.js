class launchar{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.pointB = pointB
        this.launchar = Constraint.create(options);
        World.add(world, this.launchar);
    }

    fly(){
        this.launchar.bodyA = null;
    }

    display(){
      
        
            var pointA = this.launchar.bodyA.position;
            var pointB = this.pointB;
            push()
               
            strokeWeight(4)
            fill("blue")
            line(pointA.x,pointA.y,pointB.x,pointB.y)
pop()
        }
    }
    

