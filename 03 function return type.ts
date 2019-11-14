// Function types
// add to numbers and returns it in a string value
function addNumbers( a:number, b:number ) : string {
	return (a + b).toString();
}

// anonymous function - the function has no name
// the cuesiton mark in b indicate that it could be missed if you want
// every optional parameter must be the last of them
var addString = function (a: string, b?: string) : string {
    return 'hola ' + a + b;
}

function logggin( val: any ) : void{ console.log(val) }

logggin(addString('Nick', 'Frederick'));


// default initialized parameter
function buildName( firstname: string, lastname: string = 'George' ) {
	return firstname + ' ' + lastname;
}

logggin(buildName('David'));

// rest parameters
function buildPerson( firstname: string, ...remainingName: string[] ) {
	return firstname + ' ' + remainingName.join(' ');
}

let firstPerson = 'Marcelo';
let secondPerson = 'Julio';
let personOne = buildPerson( firstPerson, secondPerson, 'john', 'steve', 'Paul', 'Dandiel', 'James' );
logggin(personOne);

 
 