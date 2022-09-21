
let arr1 = [1,2,3,4,5];

function mapping(num){
    return num**3;
}

let result = arr1.map(mapping);
console.log(result);

function filtering(num){
    if(num%2==0){
        return num;
    }
}

let res =arr1.filter(filtering);
console.log(res);

function reducer(previous,current){
    return previous+current;

}

let re = arr1.reduce(reducer);
console.log(re);



// Concat() : combining two or more arrays or items at the end of the array
result = arr1.concat(1,2);
console.log(result);
// two arrays
let arr2 = [6,7,8,9,10];
result = arr1.concat(arr2);
console.log("First Array");
console.log(arr1);
console.log("Second Array");
console.log(arr2);
console.log("Merged Array");
console.log(result);


//Push() : this function adds element at the end of the Array

arr1.push(6);

console.log(arr1);

//Pop() : this function removes the element at the end of the Array

arr1.pop();

console.log(arr1);

// Reverse() : this function reverse the Array
arr1.reverse();

console.log(arr1);


//Sort() : this function sorts the array

arr1.sort();
console.log(arr1);

//join(): Adds all elements of the array into string specified with
///          specific separtor
let st = arr1.join("||||");
console.log(st)

// unshift() : Adds new element at the start of the array
arr1.unshift(89);
console.log(arr1);

// shift() : Removes the element from the start of the array

arr1.shift();

console.log(arr1);


arr1.find();




