// we dont specify the type of the value so no problem.
let a;
a = 1;
a = true;
a = 'string';

// types
let b: number;
let c: boolean;
let d: string;
let e: any;
let f: number[] = [1,2,3];
let g: string[] = ['John', 'Julian', 'Oscar'];
let h: boolean[] = [true, false, false];
let i: any[] = ['Julio', true, 12.1];

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;
// short way using enum
enum Color { red = 0, green = 1, blue = 2 }
let backgroundColor = Color.red

