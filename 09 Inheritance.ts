// Inheritance
class Shape {
    area: number
    constructor( _area: number ) {
        this.area = _area
    }
}

class Circle extends Shape {
    display() {
        console.log('Area of the circle is' + this.area);
    }
}

var obj = new Circle(123);
obj.display();

/* 
interface IBase {
	id: number;
}
interface IDerivedFromBase extends IBase {
	name: string;
}

class InterfaceInheritance implements IDerivedFromBase, IBase { 
	id: number;
	name: string;
}

let newUser = new InterfaceInheritance();
console.log(newUser); */

