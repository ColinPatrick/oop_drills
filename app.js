// let Person1 = {
//     name: "John",
//     sayHello: function() {
//         alert(`Hello! My name is ${this.name}`);
//     } 
// };

// let Person2 = {
//     name: "Paul",
//     sayHello: function() {
//         alert(`Hello! My name is ${this.name}`);
//     }
// };

// let Person3 = {
//     name: "George",
//     sayHello: function() {
//         alert(`Hello! My name is ${this.name}`);
//     }
// };

// let Person4 = {
//     name: "Ringo",
//     sayHello: function() {
//         alert(`Hello! My name is ${this.name}`);
//     }
// };

// let Person5 = {
//     name: "Colin",
//     sayHello: function() {
//         alert(`Hello! My name is ${this.name}`);
//     }
// };

// Person1.sayHello();
// Person2.sayHello();
// Person3.sayHello();
// Person4.sayHello();
// Person5.sayHello();

// function Person(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// };

// Person.prototype.sayHello = function() {
//     alert(`Hello! My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}!`);
// };

class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    sayHello() {
        alert(`Hello! My name is ${this.name}, I am ${this.age} years old and I live in ${this.city}!`);
    }
};

let p1 = new Person('John', "Liverpool", 30);
p1.sayHello();
let p2 = new Person('Paul', 'Liverpool', 31)
p2.sayHello();
let p3 = new Person('George', 'Liverpool', 33)
p3.sayHello();
let p4 = new Person('Ringo', 'Liverpool', 31)
p4.sayHello();
let p5 = new Person('Colin', 'Birmingham', 28);
p5.sayHello();

class Vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }

    aboutVehicle() {
        console.log(`This vehicle was made by ${this.manufacturer} and it has ${this.wheels} wheels!`);
    }
};

class Truck extends Vehicle {
    constructor(manufacturer, wheels, doors, isTruck) {
        super(manufacturer, wheels);
        this.doors = doors;
        this.isTruck = isTruck;
    }


    aboutVehicle() {
        let bed;
        if (this.isTruck === true) {
            bed = "has a truck bed";
        } else {
            bed = "doesn't have a truck bed";
        };
        console.log(`This truck was made by ${this.manufacturer} and it has ${this.wheels} wheels, ${this.doors} doors, and it ${bed}.`);
    }
};

class Sedan extends Vehicle {
    constructor(manufacturer, wheels, doors, size, mpg) {
        super(manufacturer, wheels);
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle() {
        console.log(`This sedan was made by ${this.manufacturer} and it has ${this.wheels} wheels, ${this.doors} doors, comes in a ${this.size} size and gets about ${this.mpg} miles per gallon!`);
    }
};

class Motorcycle extends Vehicle {
    constructor(manufacturer, wheels, handlebars) {
        super(manufacturer, wheels);
        this.handlebars = handlebars;
    }

    aboutVehicle() {
        let handle;
        if (this.handlebars === true) {
            handle = "has handlebars instead of a steering wheel"
        } else {
            handle = "doesn't have handlebars"
        };
        console.log(`This motorcycle was made by ${this.manufacturer} and it has ${this.wheels} wheels. It has no doors and it ${handle}.`)
    }
};

let newTruck = new Truck("Ford", 4, 2, true);
newTruck.aboutVehicle();

let newSedan = new Sedan("Toyota", 4, 4, "medium", 30);
newSedan.aboutVehicle();

let newMotorcycle = new Motorcycle("Harley Davidson", 2, true);
newMotorcycle.aboutVehicle();



