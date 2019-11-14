// Protected class members
class ClassUsingProtected {

	protected id: number;

	public getId() {

		return this.id;	

	}

}

class DerivedFromProtected extends ClassUsingProtected {

	constructor() {

		super();
		this.id = 0;

	}

}

var derivedFromProtected = new DerivedFromProtected();
derivedFromProtected.id = 1;// err: property id is protected and only accessible withing class... and its subclases
console.log( `getID returns ${ derivedFromProtected.getId() }` );