alert("Hello World");
        // one line comment

        /*
        multiple
        line 
        comment
        */

        /*
        External JS
        We need a JS File
        We need to link that JS file to our html. We still need to use
        the script tag
        */

alert("We are now using external JS")

/*
*** Variables

As of ES6, we do have two ways of creating a variable and also onne way for
creating a constant

Original method for creating variables is to use var.

syntax
var variableName = XXX;

Declaring variables with let

This was introduced in 2015 in ES6

let variableName = XXX; 
*/

/*

*** Escape character 
\' single quote
\" double quote
\\ backward slash
\n new line
*/
var num;
let num2;
const PI = 3.14;
//Assignment Statement
num = 9;
num2 = 10;
//Variable initialization statement
let total = num + num2;
let name1 = "John Doe";
console.log(name1);
//console.log(num);

/*

*** Data types in JavaScript ***

Primitive Types

1. String e.g. "This is a string".
A string is a sequence of characters that are enclosed in single quotes or double quotes

2. Number e.g. 12/ Infinity/ 3.14. In JS, all numbers are floats

3. Boolean => true or false 

4. null

5. undefined

let sum;
console.log(sum);

Objects e.g. {key:value}/ array [1,2,3]/ function

** null vs. undefined **

undefined == means a variable has been declared but has not been assigned a value yet.
Also if a functions does not explicitly retain a value, then it ends up returning undfined.

null == this is an assignment value. This is used to represent an absence of a value. In 
JS null means nothing. 

*/

/*

*** Type coercion:
The process of converting one data type to another. This can be explicitly or implicitly.

JS is a weakly-typed language

2 + 2 = 4
2 + '2' = '22' (concatination number became a string == 22) number converted into another type
'2' + 2 = '22'
'2' + '2' = '22'
'2' - 0 = 2 ('2' converted into a number 2 - 0 = 2)

*/

/*

*** Functions

A function is a block of code that is designed to perform a particular task.
A function has a name.
And a function is excuted when something invokes it or calls it.

Because of ES6, we have three different ways of declaring functions in JS
1. function keyword declaration 
2. function expression expression saved in a variable
3. ES6 Arrow functions

The function keyword declaration:
With this, a function is defined with the function keyword, followed by the function
name, followed by parantheses()
Function name can contain letters, digits, unscores, dollar signs. 
A function name cannot start wuth a number.

function functionName()parameter1, parameter2, parameter3, ...parameterN){
    function body. This is th ecode to be executed when the function is called
}

In Java, this is a method.

*/

function test(){
    alert("Hello World Test");
}

function getSum(num1, num2){
    return num1 + num2;
    //console.log(num1 + num2);
}

// to call a function, you just use the function name and arguments.

//test();
getSum(90, 20);

/*
*** Hoisting

Hoisting is JS's default behavior of moving declarations to the top.

When using function functionName(parameters){...} to declare a function, 
this function will hoist to the top of the script.

Example:
x = 10;
var x;

This is possible in JS because of hoisting. In JS, a variable can be declared after it jas been used.
This means a varaible can be used before it has been declared.

Function expressions (function expression saved in a variable) 

A function can be also defined using an expression.
A function expression can be stored into a variable.
After a function has been stored into a variable, the variable cann be used as a function

let variableName = function(parameters){
    code to be executed goes here
};

variableName(arguments){

}

*/

let getTotal = function(a, b, c){
    return a + b + c;
}

let y = getTotal(1, 3, 12);
console.log(y);

/*

*** Arrow functions
Arrows functions is another new way of creaing functions. This was added in ES6
Arrow function allows us to write shorter function syntax. 

Syntax for arrow functions 
arrowFunctionName = (parameter) => {
    code to be executed goes here;
}

Given the following function expression ... 

let hello = function(){
    alert("Hello World Function");
}

convert it into an arrow function. 
solution:

*/
let hello = () =>{
    let carName = "Toyota"; // This is a local variable
    alert("hello world!!!" + carName);
}

/*
*** Global variables
Variables declared outside of any function have global scope.
*/

console.log("Outside "/* + carName */);
hello();

/*

*** Scope
Local scope and global scope

Local JS Variables
Variables declared within a function, they are local to the function 
Local variable have a function scope. Local variables can only be accessed 
within the function where they are declared.

*** Arrays

Arrays are used ti hold a collectin data in JS arrays can be able 
to hold data of different types.

let arrayName = []; // This is an empty array
let arrayName1- [value1, value2, value3,...]

*/

let cunySchools = ["LC", "CCNY", "BCC", "Hostos", "Hunter"];

/* 
To access values from an array, you need the array name and an index.
arrayName[index]

To change a value...
arrayName[index] = newValue;

*/

console.log(cunySchools[0]);
console.log(cunySchools.length);
cunySchools[0] = "Lehman College"; //New value for index 0
console.log(cunySchools[0]);
console.log(cunySchools[cunySchools.length-1]);

/*
*** Objects
This is a way of organizing data using key/value pairs.
Objects can contain many values
 */

const car = {make: "Toyota", model: "Matrix"};

/*
*** Accessing data from objects
bracket notation

objectName["key"]

dot notation
objectName.keyName

examples below... 
*/

//bracket notation
console.log(car['make']);
console.log(car['model']);
//dot notation
console.log(car.make);

/*

*** Functions

A higher order function is a function that operates on any other function,
either as arguments(actual parameters) or return them.

function outerFunc(cb){
    return cb();
}

From the example above, what is the higher order function? 
outerFunc. This is because outerFunc takes in cb and returns the call of the cb
inside it

*** Callback Function
A callback function is any function that is passed into another function as an argument,
which is then called inside the outer function to complete some action

Callback functions can be declared as functions, function expressions, 
or even anonymous functions

function outerFunc(cb){
    return cb();
}

What callback function in the above example?
cb() is the callback function and outerFunc is the higher order function.
*/

function firstFunction(){
    displayAlert("Hello one")
}

function secondFunction(){
    displayAlert("Hello two")
}

function displayAlert(text){
    alert(text);
}

function calculate(num1, num2, callBackFunction){
    var t = num1 + num2;
    displayAlert(t);
}

secondFunction();
firstFunction();
calculate(1, 10, displayAlert);