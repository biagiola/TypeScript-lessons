// Classes
class SimpleClass {
	id: number;
	print() : void {
		console.log(`SimpleClass has id: ${ this.id }`);
	}
}

// intance of the class
let mySimpleClass = new SimpleClass();

mySimpleClass.id = 123456; 

mySimpleClass.print();