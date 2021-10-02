class Chain{
    constructor(bodyA, poinB){
        var option={
            bodyA: bodyA,
            poinB: poinB,
            stiffness: 0.04,
            length: 200
        }
        this.poinB=poinB
        this.chain = Constraint.create(option);
        World.add(world, this.chain);
    }
    display(){
        if(this.chain.bodyA){
    var pointA = this.bodyA.position;
    var poinB = this.poinB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}