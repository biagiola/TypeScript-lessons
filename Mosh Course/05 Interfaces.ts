// by convention we use pascal case not camel case.
interface Point {
    x: number,
    y: number
}

let drawPoint = ( point: Point  /*  { x: number, y: number } */ ) => {
    // some algorithms
    
    console.log(point.x, point.y);
}

