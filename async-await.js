//1. Async Function:
//An async function is a function that operates asynchronously via the event loop, using the async keyword.
//It always returns a promise.

//2. Await Operator:
//The await keyword is used within an async function to pause execution until a promise is resolved or rejected.
//It can only be used inside an async function.

//3. Error Handling:
//You can use try...catch blocks to handle errors within async functions.
//Errors thrown inside an async function are converted into rejected promises.

async function fetchData() {
    try{
        const data = await fetchDataFromServer();
        console.log(data);
    } catch (error){
        console.error("Error fetching data:", error)
    }
}