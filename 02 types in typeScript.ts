// Union Types
var unionType: string | number; // string or number
unionType = 1;
unionType = 'Hello';

// Type Guards
// this is wrong
/* function addWithUnion( arg1: string | number, arg2: string ) {
	return arg1 + arg2;
} */

// this is good
function addWithUnion( arg1: string | number, arg2: string | number ) : string | number {
	return arg1.toString() + arg2.toString();
}
addWithUnion(55, 65);
// with guard
function addWithTypeGuard( arg1: string | number, arg2: string | number ): string | number {
	if( typeof arg1 === 'string' ) {
		console.log('First argument is a string');
		return arg1 + arg2;
	}
	if ( typeof arg1 == 'number' && typeof arg2 === 'number' ) {
		console.log('both arguments are numbers');
		return arg1 + arg2;
	}
	return arg1.toString() + arg2.toString();
}

// Type Aliases - convenient naming convention for union types
type StringOrNumber = string | number;
function addWithAlias( arg1: StringOrNumber, arg2: string | number ) {
	return arg1.toString() + arg2.toString();
}

// Null and undefined
function testUndDef( naming: string | number ) {
	console.log('test parameter: ' + naming);
}

//testUndDef(); // it must to have an argument
let naming = null;
testUndDef( naming ); 


 