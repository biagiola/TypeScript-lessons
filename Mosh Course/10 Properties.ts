class Point {
    constructor( public x?: number, private y?: number ) {
    }

    public draw() {
        console.log( 'x: ' + this.x + ', y: ' + this.y );
    }

    /* Properties (we can use it like a fields) */
    // return a private property
    get X() {
        return this.x;
    }

    set X( value ) {
        if ( value < 0) 
            throw new Error('value cannot be less than 0.');
        this.x = value;
    }

    /*
    getX() {
        return this.x;
    }

    setX( value ) {
        if ( value < 0) 
            throw new Error('value cannot be less than 0.');
        this.x = value;
    }
     */

}

let point = new Point(5, 15); 

/* let x = point.getX();
point.setX(10); */

// with properties.
let x = point.X;  // get
point.X = 10;     // set
point.draw();

