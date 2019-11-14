// implementing interfaces (interface: custom type; only describe some comun behaviors of the class)
interface IPrint {
	print();
}

// A function using a interface property
function printClass( a: IPrint ) {
	a.print();
}

// A class using a interface property
class ClassA implements IPrint {
	print() {
		console.log('ClassA.print()');
	}
}

class ClassB implements IPrint  {
	print() {
		console.log(`ClassB.print()`)	;
	}
}

let classA = new ClassA();
classA.print();
let classB = new ClassB();



