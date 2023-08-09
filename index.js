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
