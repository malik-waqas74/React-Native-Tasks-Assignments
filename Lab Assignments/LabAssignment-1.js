/* Problem 1:
Write program to print the kth digit from last. E.g. input 23617
 and k=4 output 3. 
 */

let kthDigitFinder = (nuum, k) => {
    var kthDigit;
    let kk = "" + nuum;
    for (let i = 0; i < kk.length; i++) {
        if (kk[i] == (k - 1)) {
            kthDigit = "" + kk[i];

        }
    }
    return parseInt(kthDigit);
}

console.log(kthDigitFinder(1234, 4));

/* Problem 2:
Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20
(Hint: convert string to array and then use reduce function)
 */

var a = "23618"; // String
let arr = []; // Array
// Applying loop on the String
for (let aa of a) {
    arr.push(parseInt(aa));// Pushin elements to array with conversion to int
}

console.log(arr);
// Applying reduce function on the array
var result = arr.reduce((prev, curr) => {
    return prev + curr;
})
console.log(`total result=${result}`); //Displying Result

/* Problem 3:
Write program to find sum of even digits. Input 23617 output 2+6=8.
(Hint: Convert string to array and use map function)
 */

var nums = "123456";
let arr2 = [];

for (let n of nums) {
    arr2.push(parseInt(n));
}

let sum = 0;

// Applying map function
arr2.map((number) => {
    // filtering even numbers and storing in sum variable
    if (number % 2 == 0) {
        sum = sum + number;
    }
})

console.log(arr2);
console.log(`total Sum=${sum}`);

/* Problem 4:
Write a JavaScript that calculates the squares and cubes of the numbers from 0 to 10.
 */

var squareAndCubes = (...args) => {
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let squares = num.map((na) => {
        return na ** 2;
    })

    let cubes = num.map((ne) => {
        return ne ** 3;

    })

    var obj = {
        allNumbers: num,
        Squares: squares,
        Cubes: cubes
    }
    

    return obj;
}

console.log(squareAndCubes());

/* Problem 5:
Develop and demonstrate JavaScript script that uses functions 
for the following problems: 
1.	Parameter: A string 
2.	Output: The position in the string of the left-most vowel 
3.	Parameter: A number  
4.	Output: The number with its digits in the reverse order
 */

// Left Most Vowel
let vowelPositioner = (val) => {
    let vals = "";

    vals = val;
    vals = vals.toLocaleLowerCase(); //Every string to lower case
    let position;
    for (let i = 0; i < vals.length; i++) {

        if (vals[i] === 'a' || vals[i] === 'e' || vals[i] === 'i' || vals[i] === 'o' || vals[i] == 'u') {

            position = i;
            break;

        }
    }
    return position;

}
console.log("Postion of Left most vowel ::" + vowelPositioner('A55isd'));


// Task 2 :    Reversing the numbers

let numberReverser = (digits) => {
    let nums = "" + digits; // Storing digits in string
    var arr = []; // Empty array for storing data
    for (let element of nums) {
        arr.push(element);
    }
    let arr2 = arr.reverse().join(''); // joining after reversing

    return parseInt(arr2);



}


console.log(numberReverser(564));




/* 
Problem 6:
Write a JavaScript program where the program takes a random integer
 between 1 to 10, the user is then prompted to input a guess number.
  If the user input matches with guess number, 
  the program will display a message "You WIN" 
  otherwise display a message "Not matched".
 */

// pakage for taking user input on the screen
const ps = require('prompt-sync');
const prompt = ps();
var randomGuesser = () => {
    var randomNumber = Math.floor((Math.random() * 10 + 1));// 1 to 10
    console.log(randomNumber);
    var guessNumber = prompt("Enter You guess::");// package is installed prompt-sync
    if (guessNumber == randomNumber) {
        console.log("You WIN");
    }
    else {
        console.log("Not Matched")
    }

}
//randomGuesser();


/* Problem 7:
Write a JavaScript program to check whether 10 appears in first
 or last position of a given array of integers. 
 The array length must be greater or equal to 2.
 */
let numberChecker = (array) => {
    if (array.length >= 2) {

        return array[0] === 10 || array[array.length - 1] === 10;
    }
    else {
        console.log('Array size is less than 2');
    }
}

console.log(numberChecker([10, 2, 3, 4]));



/* Problem 8:
Write a JavaScript function that returns a passed
string with letters in alphabetical order.
Example string: 'comsats'
Expected Output: 'acmost'
 */

let alphabeticOrder = (st) => {

    let arrays = [];
    for (let i = 0; i < st.length; i++) {
        arrays.push(st[i]); // pushing elements in Array
    }
    let str = "";
    str = str + arrays.sort().join('');// sorting an joining in string
    return str;
}

console.log(alphabeticOrder('comsats'));
