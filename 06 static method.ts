/*
A class defines a blueprint of what an object should look like and act like and then implements that blueprint by initialising class properties and defining methods.
It has a static method called ''create'' that it makes we can use it without creating an instance of the class. 
*/

/* Without static method */
class PizzaMaker01 {
  create(event: { name: string; toppings: string[] }) {
    return { name: event.name, toppings: event.toppings };
  }
}
// We must to create a instace of the class
const pizzaMaker = new PizzaMaker01();

const pizza01 = pizzaMaker.create({
  name: 'Inferno',
  toppings: ['cheese', 'peppers'],
});

console.log(pizza01);

/* With static method */
class PizzaMaker02 {
  static create(event: { name: string; toppings: string[] }) {
    return { name: event.name, toppings: event.toppings };
  }
}
// We dont need intance. Use create directly
const pizza02 = PizzaMaker02.create({
  name: 'Inferno',
  toppings: ['cheese', 'peppers'],
});

console.log(pizza02);