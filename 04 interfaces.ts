// interfaces does not generate anything js file. It's only used by the compiler
// for type cheking during the compilation step
// the letter I in the beginning is a convention

interface IUserInterface {
	id: number;
	name?: string;  // optional property
}

interface IRectangleOptions {
    width: number;
    length: number;
}

// a variable implemeting a interface
let variableType : IUserInterface = { id: 1, name: 'George'}

// a function implementing a interface
function userFunct( options: IUserInterface ) {
    let id = options.id;
    let name = options.name;
}
// function calling
userFunct({
    id: 100,
    name: 'Barner'
});

/* a class implementing a interface */
class UserClass {

}


/* other way to do a consele.log
 function log( val: any ) : void { console.log( val ); } 
 */
