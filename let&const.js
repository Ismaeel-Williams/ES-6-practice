//let and const Decorations:

//let allows block-scoped variable declarations
//const declares constants that cannot be reassigned.

let x = 10;
x = 20; //valid

const PI = 3.14;
PI = 3.14159; //Invalid

//Q. What is the difference between, let, const and var
//let and const are braces scope and var is  functional scope

{
    let x = 10;
    let y = 100;
    var outside = 500;
}

console.log(x) //error x is not defined
console.log(outside) //500