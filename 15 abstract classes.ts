// abstract classes
abstract classe AbstractEmployee {

	public id: number;
	public name: string;
	abstract getDetails(): string;

	printDetails() {

		console.log( this.getDetails() );

	}

}

class NewEmployee extends AbstractEmployee {

	getDetails(): string {

		return `id{ this.id }, name: ${ this.name }`

	}

}

class NewManager extends NewEmployee {

	public Employees: NewEmployees[];
	
	getDetails(): string {

		return super.getDetails() + `, Employee Count ${ this.Employees.length }`

	};

}

let emoployee = new NewEmployee();
emoployee.id = 1;
emoployee.name = "Employee name";
emoployee.printDetails();

let manager = new NewManager();
manager.id = 2;
manager.name = "New Manager";
manager.Employees = new Array();
manager.printDetails(); 