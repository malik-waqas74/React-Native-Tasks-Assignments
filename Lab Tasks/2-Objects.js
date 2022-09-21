
/*Activity - 1 */
/** Task1 
// Create a function named Student with properties name and class 
//  * and gpa.
//  *Create another function that creates and return the array of 3 
//  students.
//  Display the name of each student on screen.
/**Task 2
 * Use filter function to separate students with gpa above 3.
 */




// Task 1- Solution

// Student Object Template
function STUDENT(name, reg, gpa) {
    this.name = name;
    this.reg = reg;
    this.gpa = gpa;
}

// Function that returns the Array of Students
function createStudents() {
    let s1 = new STUDENT("Ali", 34, 2.5);
    let s2 = new STUDENT("Imran", 21, 3.5);
    let s3 = new STUDENT("Afnan", 43, 3.2);
    let s4 = new STUDENT("Anas Dar", 35, 3.7)

    return [s1, s2, s3, s4];
}

let all = createStudents(); //Storing data in a Variable

// Task-2 Solution

// Function for Filtering the students whose gpa is greater than 3 

let fil = function filtering(Obj) {
    return Obj.gpa > 3;
}

// Applying Filter function on the Given data
let filteredStudents = all.filter(fil);

console.log("All Students");
console.log(all);
console.log("Students with GPA>3");
console.log(filteredStudents);


/*Activity-No 2 */

/// Task 1 : Create a Arrow function that takes Name and Display it

let myname = (YourName) => console.log(YourName);

myname("Malik Waqas");

//// Task 2 : Using REST Operators
//  Create a function that takes any Number of Arguments
// Separate the Even Odd Numbers 
// After Separation Devide Even Numbers by 2
// and multiply Odd Numbers with 2.
// Return the object {Even[],Odd[]}

let Generator = (...args) => {
    // Arrays 
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let Even = [];
    let Odd = [];

    // Function for returning Even Numbers
    let Evener = (num) => {
        return num % 2 == 0;

    }

    //Function for returning Odd Numbers
    let Odder = (num) => {
        return num % 2 != 0;
    }

    // Applying filter functions on the Arrays
    Even = array.filter(Evener);
    Odd = array.filter(Odder);


    // Function for devide Even Number by 2
    let evenMapper = (num) => { return num / 2 };
    // Mapping the Function with Array
    Even = Even.map(evenMapper);

    // Function for multiply Odd Number with 2
    let oddMapper = (num) => { return num * 2 };

    // Mapping the function with Array
    Odd = Odd.map(oddMapper);

    // Returing Object
    return { ODD: [Odd], EVEN: [Even] };
}
// Calling the function
console.log(Generator());
