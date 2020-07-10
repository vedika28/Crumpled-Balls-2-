class Dustbin {

    constructor() {
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(690, 560, 0, 0, options);
        World.add(world, this.body);
        this.image=loadImage("dutbin.png");
        this.width = 160;
        this.height = 160;
        World.add(world,this.image);
    }

    display() {
        imageMode(CENTER);
        image(this.image ,690,565,this.width,this.height);
    }
}