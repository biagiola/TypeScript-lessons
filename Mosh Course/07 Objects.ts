class Point {
    x: number;
    y: number;

    draw() {
        console.log( 'x: ' + this.x + ', y: ' + this.y );
    }

    getDistance( another: Point ) {
        // ...
    }
}

//let point: Point;
let point = new Point(); // an object is a instance of a class
point.x = 5;
point.y = 15; 
point.draw();