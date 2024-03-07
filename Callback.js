//Callback to handle asynchronous code:
//1. First, let's understand synchronous code and problem that arise with
//synchronous code when fetching data from a database or making API calls.

function getUsers(){
    return [
        {username: "john", email: "john@test.com"},
        {username: "jane", email: "jane@test.com"}
    ]
}

function findUser(username){
    const users = getUsers();
    const user = users.find((user) => user.username === username);
    return user;
}

console.log(findUser("john"));

//2. To simulate the delay, you can use the setTimeout() function.
//for example:

function getUsers() {
    let users = [];
    setTimeout(()=>{
        users = [
            {username: "john", email: "john@test.com"},
            {username: "jane", email: "jane@test.com"}
        ]
    }, 1000)
    return users;
}

function findUser(username){
    const users = getUsers();
    const user = users.find((user)=> user.username === username);
    return user;
}

console.log(findUser("john"));
