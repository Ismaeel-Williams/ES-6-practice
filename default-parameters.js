//Default Parameters:
//Default parameters provide values in case arguments are not passed to a function

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet()
greet("John Welker")