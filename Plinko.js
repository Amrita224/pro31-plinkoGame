class Plinko {
    constructor(x, y) {
        var opt = {
            restitution: 1,
            isStatic: true,
            friction: 0
        }
        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, opt);
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius);
        pop();
    }

};