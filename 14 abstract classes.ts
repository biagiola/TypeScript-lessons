// Abstract Classes
abstract class AbstractEmployee {

	public id: number;
	public name: string;
	abstract getDetails(): string;
	public printDetails() {

		console.log( this.getDetails() );

	}

}