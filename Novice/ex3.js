// Create a Typescript class called Person with properties name and age. Add a method to the class that prints out the person's name and age. This exercise will help you understand how to create and use classes in Typescript.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    return Person;
}());
var p1 = new Person("Josh", 20);
var p2 = new Person("Neli", 19);
p1.printName();
p1.printAge();
p2.printName();
p2.printAge();
