// Q1
let numbers = [1, 5, 3, 8, 2 ,4,6,7,9,10];

console.log("sort:" ,numbers.sort((a, b) => a - b) );

// Q2

let SqrtNumbers = numbers.map(num => num*num);
console.log("Square Number" ,SqrtNumbers);

// Q3
console.log("first number bigger than 25:",SqrtNumbers.find(num => num>25));

// Q4
let NumBigger5 = numbers.every(num => num > 5);
console.log("is all numbers bigger than 5" ,NumBigger5);
// Q5 
console.log("is numbers include 3:",numbers.includes(3));
// Q6 
console.log("Even numbers:",numbers.filter(num => num%2==0));
// Q7 
// numbers.splice(5,6)
// console.log("remove the midlles index", numbers);
// Q8
let sums = numbers.reduce((num1, num2) => num1 * num2, 1);
console.log("Multi numbers:", sums);
// Q9
let IndexNumBigger5 = numbers.findIndex(num => num > 5);
console.log("the index of the first number bigger than 5 is" ,IndexNumBigger5);
// Q10
console.log("remove the last index" ,numbers.pop());
numbers.push(100)
console.log("print the last index" ,numbers);
// Section 2
// Q1
let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

console.log("Names include a" , names.filter(name => name.includes("a")));
// Q2
console.log( names.join("-"));

// Lab function
function multi(num1 , num2) {
    return num1 * num2
}
function divison(num1 , num2) {
    return num1 / num2
}
function add(num1 , num2) {
    return num1 + num2
}
function sub(num1 , num2) {
    return num1 - num2
}
function reminder(num1 , num2) {
    return num1 - num2
}
console.log("Multi:",multi(3,4));
console.log("divison:",divison(3,4));
console.log("add:",add(3,4));
console.log("sub:",sub(3,4));
console.log("reminder:",reminder(3,4));










