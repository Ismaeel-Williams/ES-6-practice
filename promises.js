//Promises: 
//Promises ar objects that represent the eventual completion or failure of an asynchronous operation.
//They allow you to write asynchronous code in a more readable and manageableway. avaiding callback hell.

//1. Creating a Promise:
//Promises are created using the promise constructor, which takes a function as and argument.
//This function, called the executor, accepts two parameter.

const myPromise = new Promise ((resolve, reject)=>{
    //Asynchronous code goes here
    if(true){
        resolve("Operation completed successfully")
    } else {
        reject("Operation failed")
    }
})

//2. Promise States:
//Promises can be in one of threee states: pending, fulfilled, or rejected.
//Once a promise settles(either fulfilled or rejected), it becomes immutable.

//3. Handling Promise Resolution:
// You can handle a promise's resolution using the .then()method, which tales two optional callbacks:
// onFullfilled for handling a successful resolution and onRejected for handling a failure.

myPromise.then(
    (result) =>{
        console.log(result); //Operation completed successfully
    },
    (error) =>{
        console.error(error); //Operation failed
    }
);

