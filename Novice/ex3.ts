// Create a Typescript class called Person with properties name and age. Add a method to the class that prints out the person's name and age. This exercise will help you understand how to create and use classes in Typescript.

class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  printName(): void {
    console.log(this.name);
  }

  printAge(): void {
    console.log(this.age);
  }
}

const p1 = new Person("Josh", 20);
const p2 = new Person("Neli", 19);

p1.printName();
p1.printAge();

p2.printName();
p2.printAge();
