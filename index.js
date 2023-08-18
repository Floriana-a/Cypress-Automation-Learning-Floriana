console.log('Hello World');

//Variables
let name = 'Wednesday';
// let firstName = 'Wednesday', lastName = 'Addams'; 
console.log(name);

//Dynamic Typing
let firstName = 'Wednesday'; //String Literal
let lastName = 'Addams';
let age = 8; //Number Literal
let isApproved = true; //Boolean Literal
let selectedColor = null;
console.log(firstName);

//Constants
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//Objects
let person = {
    name: 'Wednesday',
    age: 8
};
console.log(person);

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

//Functions (Performing a task)
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith');
greet('Mary', 'Smith');

//Functions (Calculating a value)
function square(number){
    return number * number;
}
console.log(square(2));

//Arithmetic Operators
let x = 10;
let y = 3;

//Arithmetic Operators (Increment)
console.log(x++); // x = x +1
console.log(x);

//Assignment Operators
x += 5; //(x = x + 5)
x *= 3 //(x = x * 3)

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Arithmetic Operators (Decrement) 
console.log(-- x);

//Comparison Operators
// let x = 1;
//Relational Operators
// console.log(x > 0); // result -> true
// console.log(x >= 1); // result -> true
// console.log(x < 1); // result -> false
// console.log(x <= 1); // result -> true
//Equality Operators
//console.log(x === 1) // checking if x = 1 result -> true
//console.log(x !== 1) // checking if x is not = 1 -> false

//Strict Equality Operator (Type+Value)
console.log(1 === 1); // -> true if it is the same type and same value, if comparing a string '1' with a value 1 result -> false
//Lose Equality Operator (Value)
console.log(1 == 1); // -> true
console.log('1' == 1); // -> also true because it automatically convert the type of value to be the same
console.log(true == 1); // -> also true because it will automatically convert the type on the right side to boolean

//Ternary Operators
//If a customer has more than 100 points they are a 'gold' customer, otherwise, they are a 'silver' customer
let points = 110;
let type = points > 100 ? 'gold' : 'silver'; 
console.log(type);

//Logical Operators with Non-booleans
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore; //Logical AND (&&) -> return true if both operands are true
// let eligibleForLoan = highIncome || goodCreditScore; //Logical OR (||) -> return true if one of them is true
//NOT(!)
let applicationRefused = !eligibleForLoan;
console.log('Eligible', eligibleForLoan);
console.log('Application Refused', applicationRefused)
//Anything that is not Falsy -> Truthy
 let userColor = 'red';
 let defaultColor = 'blue';
 let currentColor = userColor || defaultColor;
 console.log(userColor);
 console.log(currentColor);

//BitWise Operators
// 1 = 00000001
// 2 = 00000010
console.log(1 | 2); //BitWise OR (it adds the decimal point even if just one number contains it)
console.log(1 & 2); //BitWise AND (both numbers must have the same decimal points, otherwise it returns 0)
// Read (00000100), Write (00000110), Execute (00000111)
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission; //with bitWise OR we can add permissions
console.log(myPermission);
let message = (myPermission & readPermission) ? 'yes' : 'no'; //with bitWise AND we can check to see what permissions we have
console.log(message);


let a = 'red';
let b = 'blue';

let c = a; //swapping variables
a = b; 
b = c;
console.log(a);
console.log(b);

// Hour
// If hour is between 6am and 12pm: Good Morning!
// If hour is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

let hour = 10;
if (hour >= 6 && hour <12)
    console.log('Good Morning');

else if (hour >= 12 && hour <18) 
    console.log('Good Afternoon');

else
console.log('Good Evening');

let role;
switch (role) {
    case 'guest': 
    console.log('Guest User');
    break;

    case 'moderator':
        console.log('Moderator User');
        break;

        default:
            console.log('Unknown User');
}

if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User');

// Exercise 1 - Array from Range
const numbers = arrayFromRange (-10, -4);
console.log(numbers);
function arrayFromRange(min,max){
    const output = [];
    for (let i = min; i <=max; i++)
    output.push(i);
return output;
    
}

//Excercise 2 - Includes
const numbers1 = [1, 2, 3, 4];
console.log(numbers1.includes(1));
function includes(array, searchElement){
    for (let element of array)
    if (element === searchElement)
    return true;
return false;
}

//Exercise 3 - Except
const numbers2 = [1, 2, 3, 4, 1];
const output = except (numbers2, [1, 2]);
console.log (output);
function except (array, excluded){
    const output = [];
    for (let element of array)
    if (!excluded.includes(element))
    output.push(element);
return output;
}

//Exercise 4 - Moving an element
const numbers3 = [1, 2, 3, 4];
const output1 = move(numbers3, 0, 1);
console.log(output1);
function move(array, index, offset){
    const position = index + offset;
    if(position >= array.length || position <0){
        console.error('Invalid offset.');
        return;
    }
    const output1 = [...array]; //this is a copy of the original array
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output1;
}

//Exercise 5 - Count occurrences
const numbers4 = [1, 2, 3, 4];
const count = countOccurrences(numbers4, 1);
console.log(count);
function countOccurrences(array, searchElement){
    //let count = 0
    //for (let element of array)
    //if (element === searchElement)
    //count++;
    //return count;
    return array.reduce((accumulator, current)=>{
        const occurrence = (current === searchElement)
        console.log(accumulator, current, searchElement)
        return accumulator + occurrence;
    }, 0);
}

//Exercise 6 - Get Max
const numbers5 = [1, 2, 3, 4];
const max = getMax(numbers5);
console.log(max);
function getMax(array){
    if (array.length === 0) return undefined;
//     let max = array[0];
//     for (let i = 1; i < array.length; i++);
//     if (array[i] > max)
//     max = array[i];
// return max;
    return array.reduce((aa, bb) => (aa > bb) ? aa : bb); // same result in a reduced method
}

//Exercise 7 - Movies
// Get all the movies in 2018 with rating > 4, Sort them by their rating in a descending order, 
//Only pick the title property and display on console.
const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];

const titles = movies
.filter(m => m.year === 2018 && m.rating >=4)
.sort((a,b) => a.rating - b.rating)
.reverse()
.map(m => m.title)
console.log(titles);

//Function Declaration 
function walk(){
    console.log('walk');
}

//Function Expression
let run = function(){
    console.log('run');
};
let move = run();
run();
move();

//Arguments
function sum(){
    let total = 0;
    for(let value of arguments);
    total += value;
    return total;
}
console.log(sum(1,2,3,4,5,10));

//The Rest Operator
function sum(discount, ...prices){
    const total = prices.reduce((a,b)=> a + b);
    return total * (1 - discount);
}
console.log(sum(0.1, 20, 30, 1));

//Deault Parameters
function interest(principal, rate = 3.5, years = 5);{
return principal * rate / 100 * years;
}
console.log(interest(1000, undefined, 5));

//Getters and Setters
// const person = {
//     firstName = 'John',
//     lastName = 'Smith',
//     get fullName (){
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value){
//         const parts = value.split('');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//         }
// };
// person.fullName = 'Mosh Pit';
// console.log(person);

//Try and Catch 
// set fullName(value){
//     if (typeof value !== 'string')
//     throw new Error ('Value is not a string');
// const parts = value.split ('');
// if (parts.length !== 2);
//         this.firstName = parts[0];
//         this.lastName = parts[1];
// };
// try {
//     person.fullName = ' ';
// } 
// catch(e){
//     alert(e);
// }
// console.log(person);

//Local vs Global Scope
// const color = 'red';
// function start(){
//     const message = 'bye'; 
// }
// start();

//Let vs Var
// var color = 'red';
// let age = 30;
// function sayHi(){
//     console.log('Hi');
// }

//The This Keyword
//method -> obj
//function -> global (window, global)
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags (){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);
    }
};
video.showTags();

//Exercise 1 - Sum of Arguments
//sum ([1, 2, 3, 4]) =>
console.log(sum(1,2,3,4));
function sum (... items){
    if (items.length === 1 && Array.isArray(items[0]))
    items = [...items [0]];
    return items.reduce ((a,b) => a+b);
}

//Exercise 2 - Area of Circle
const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle.area);

//Exercise 3 - Error Handling
try {
    const numbers = [1,2,3,4];
    const count = countOccurrences(null, 1);
    console.log(count);
}
catch(e){
    console.log(e.message);
}
function countOccurrences(array, searchElement){
    if (!Array.isArray(array))
    throw new Error('Invalid Array.');

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    },0);
}