class Drop {
    constructor(x,y) {
        var options ={
            restitution: 0.1,
            friction: 0.1
        }
        this.rain = Bodies.circle(x,y,5,options);
        World.add(world, this.rain)
    }
        display() {
            fill("blue")
            ellipse(this.rain.position.x, this.rain.position.y,7,7)
        }

        repositionDrop() {
            if(this.rain.position.y > height) {
                Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
            } 
        }
}