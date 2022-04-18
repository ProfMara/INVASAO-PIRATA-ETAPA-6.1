class Barco {
    constructor(x, y, width, height, barcoPos) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;

        this.image = loadImage("./assets/boat.png");
        this.barcoPosicao = barcoPos;
        World.add(world, this.body);
    }

    //este método da classe barco serve para remover o barco da matriz e do mundo
    remove(i) {

    }


    display() {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.barcoPosicao, this.width, this.height);
        pop();
    }
}