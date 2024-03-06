//Rest Parameter and Spread Operator
//Rest parameter collects all remaining arguments into an array.
//Spread operator spreads elements of an iterable like an array.

function abcd(a,b,c,...d){
    console.log(a,b,c,d)
}

abcd(1,2,3,4,5,6,7,8)

const arr1 =[1,2,3];
const arr2 = [...arr1,4,5]; //Spread Operator

console.log(arr2)

