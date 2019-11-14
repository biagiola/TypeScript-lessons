class ClassWithConstructor {
	id: number;
	name: string;
	constructor( _id: number, _name: string ) {
		this.id = _id;
		this.name = _name;
	}
	getName(): string {	
		return this.name;
	}
    getId(): number {
        return this.id
    }
}
let newdata = new ClassWithConstructor( 10, 'Josh');
console.log( newdata.getName() );
console.log( newdata.getId() );  

// Class Modifiers
 class ClassWithPublicProperty01 {
	private id: number;  
	public name: string = 'Alexis';
    readonly age: number = 99;  
    private city: string = 'Berlin';
    
    constructor( _id: number, _name: string) {
        this.id = _id;
        this.name = _name;
    }
    // change a private property.
    changeId()  {
        this.id = 17;
    }
    
    // how to access to the private value
    getId(): number {
        return this.id
    }
    // how to set a new value to the private variable
    setId( valor: number ) {
		return this.id = valor;
	}
}

let publicAccess = new ClassWithPublicProperty01(20, 'Julian');
console.log( publicAccess.setId(123));
console.log( publicAccess );


class ClassWithAutomaticProperties {
	constructor( public id: number, public name: string ) {

	} 
}

let myAutoClass = new ClassWithAutomaticProperties( 1, 'ClassName' );
console.log( `myAutoClass id: ${ myAutoClass.id }` );
console.log( `myAutoClass name: ${ myAutoClass.name }` );// err: private arg.


// getters and setters
class ClassWithPublicProperty02 {

	static id: number;
	static naming: string;
	static _hobby: string = 'This is a static property';

	static printData(): void {
		console.log(this._hobby);
		// console.log(this._id); we can't do this because is out of our scope
	}

	get id(): number {
		return this.id	
	}
	set id( value:number ) {
		this.id = value;
	}
	get naming(): string{
		return this.naming	
	}
	set naming( value:string ) {
		this.naming = value;
	}
	get _hobby(): string{
		return this._hobby;
	}
	set _hobby( value:string ) {
		this._hobby = value;
	}	

}

let classWithPrivate = new ClassWithPublicProperty02();
classWithPrivate.naming = 'Muller';
console.log(classWithPrivate.naming); 

ClassWithPublicProperty02._hobby = 'playing Video games';
console.log(ClassWithPublicProperty02._hobby);

ClassWithPublicProperty02.printData();

