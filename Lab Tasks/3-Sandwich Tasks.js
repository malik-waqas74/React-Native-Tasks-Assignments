// Problem 1:
// 1.	Write a function called sandwich calculator. This should accept one value: bread
// 2.	The function should return the total number of possible sandwiches
// based on the amount of breads available. I need 2 breads to make one sandwich, 
//so if there are 10 breads, it should return 5. Test your function with console.log.
// 3.	Extend your function so it accepts two values, bread and cheese.
// 4.	It takes two breads and one cheese to make a sandwich. 
//The function should return the total number of possible sandwiches, 
//so if there are breads, but only 1 cheese, it should return 1.


let sandwichCalculator = (bread, cheese) => {

    let total_Sandwiches;
    // 2 breads 1 chees = 1 sandwich
    if (bread / 2 >= cheese) {
        return total_Sandwiches = cheese;
    }

    // more breads but one cheese
    if ((bread >= 2) && (cheese === 1)) {
        return total_Sandwiches = 1;
    }

    // bread are less than the cheeses
    if (bread / 2 <= cheese) {
        return total_Sandwiches = bread / 2;
    }


}

console.log("Total Sandwiches : " + sandwichCalculator(6, 10));


// Problem 2:
// Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student);

// Problem 3:
// Write a JavaScript program to delete the rollno
// property from the following object. Also print the objrect before or after deleting the property. Go to the editor
// Sample object:

delete student.rollno;
console.log(student);


