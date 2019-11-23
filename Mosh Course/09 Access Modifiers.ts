/*
    access modifiers: public, private, protected
*/
class Point {
    constructor( public x?: number, private y?: number ) {
        // we dont need this anymore
        /* this.x = x;
        this.y = y */
    }

    public draw() {
        console.log( 'x: ' + this.x + ', y: ' + this.y );
    }

}

//let point: Point;
let point = new Point(5, 15); // an object is a instance of a class
point.draw();