export class Point {
    constructor( public x?: number, private y?: number ) {
    }

    public draw() {
        console.log( 'x: ' + this.x + ', y: ' + this.y );
    }

}

