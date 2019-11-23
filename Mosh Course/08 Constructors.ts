class Point {
    x: number;
    y: number;

    // with optionals arguments so we can create a instance with no initials values if we want
    constructor( x?: number, y?: number ) {
        this.x = x;
        this.y = y
    }

    draw() {
        console.log( 'x: ' + this.x + ', y: ' + this.y );
    }

}

//let point: Point;
let point = new Point(5, 15); // an object is a instance of a class
point.draw();