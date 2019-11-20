// static variable
let person: string = "jonhanes";
let vectores  = [5, 2, 'John', true, false, 77.7 ]; // different types of data, similar to js, not avantage of typescript but is valid
let names: string[] = ['Louis', 'Davis', '4', 'Joe']; // array of strings
let phones: Array<string> = ['apple', 'samsung']; // array of strings
let height: number = 182.3546; // number
let booleanValues: boolean[] = [true, false, false]; // array of booleans

// dynamic variable
let variable: any = 5;
let variables: any = ['John', 11, true];

// tuple - it has to be in the respective order
let tupleTest: [string, number, boolean] = ['Junior', 55, true]  

enum DoorStats {
	Open,
	Closed,
	Ajar
}

function tellJoke(): string{
	return 'this is a joke'; 
}

console.log(DoorStats[2]); // logging the value cero 
console.log(tellJoke());


