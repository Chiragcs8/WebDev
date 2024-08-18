console.log("learning about error handling");

let a = prompt("Enter first number");
let b = prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b);
let x = 5;

function main() {
    
try {
    console.log("the sum is", sum * x);
    return true

} 

catch (error) {
    console.log("Error aa gaya bhai");
    return false
} 

finally {
    console.log("this is finally block");
}

}

let c = main()