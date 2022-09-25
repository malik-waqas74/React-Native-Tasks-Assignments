/* Destructuring */

let arr = () => {
    return [1, 2, 3];
}
// first way of initialization
let [a, b, c] = arr();

console.log(`a=${a}, b=${b}, c=${c}`);

// second way of initialization
let [d, e, f, g] = [1, 3, 4, 5];
console.log(`d=${d},e=${e},f=${f},g=${g}`);


/* Javascript allows to skip the values in the Arrays */
let [j, , , k] = [32, 4, 5, 66]; // 4 and 5 skipped

console.log(`j=${j},k=${k}`);

/*Classes and Objects */

class Person {
    // A constructor without passing any Argument
    constructor() {
        // initilizer code

    }

    // Setter and Getters for the classes
    set(name, Age) {
        this.name = name;
        this.Age = Age;

    }
    get() {
        return "Name::" + this.name + "\nAge::" + this.Age;
    }

}
// Creating the objects of the classes

let p1 = new Person();
p1.set('Ali Khan', 23);
console.log(p1.get());

// Inheritance : To use the functionalities of the parent class

class Employee {

    constructor(name, Age, Gender) {
        this.name = name;
        this.Age = Age;
        this.Gender = Gender;

    }

    bio_Data() {
        return `Name : ${this.name}\nAge : ${this.Age}\nGender : ${this.Gender}`;
    }
}

class Manager extends Employee {

    // to use the properties we use the super keyword;

    constructor(name, Age, Gender, Salary) {
        super(name, Age, Gender);//using the properties of parent;
        this.Salary = Salary;
    }

    Manager_Data() {
        return `${super.bio_Data()}\nSalary : ${this.Salary}`;
    }

}

// creating objects

let m1 = new Manager('Yumna', 32, 'Female', 150000);
console.log(m1.Manager_Data());