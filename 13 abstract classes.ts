// Abstract Classes - a class that can not be instantiated but they can have function implementation that other 
// classes can havewith interfaces can not.

// with that we can re use amount of similar classes.

class Employee {

	public id: number;
	public name: string;

	printDetails() {

		console.log( Number( value`id: ${ this.id }, name ${ this.name }` ) );

	}

}

class Manager {

	public id: number;
	public name: string;
	public Employee: Employee[];

	printDetails() {

		console.log(`id: ${ this.id }, name: ${ this.name }, employeeCount: ${ this.Employee.length() }`)
	
	}

}

