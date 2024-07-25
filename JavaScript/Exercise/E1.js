// let a = prompt("Enter first number");
// let b = prompt("Enter second number");
// let c = prompt("Enter operation 0.+ , 1.*, 2.-, 3./ " );
// x = Math.random ()
// if (x > 0.1) {
//     alert(func1(a, b, c));
// }
// else{
//     alert(func2(a, b, c))
// }

// function func1(a, b, c) {
//     if (c === 0) {
//         return a+b
//     }
//     else if (c === 1) {
//         return a*b
//     }
//     else if (c === 2) {
//         return a-b
//     }
//     else if (c === 3) {
//         return a/b
//     }
//     else{
//         return "chose one of 4 numers"
//     }
// }
// function func2(a, b, c) {
//     if (c === 0) {
//         return a-b
//     }
//     else if (c === 1) {
//         return a+b
//     }
//     else if (c === 2) {
//         return a/b;
//     }
//     else if (c === 3) {
//         return a**b;
//     }
//     else{
//         return "chose one of 4 numers"
//     }
// }

let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter operation")
let x = Math.random()

let obj = {
    "+": "-",
    "*": "*",
    "-": "/",
    "/": "**",
}


if (x > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else if (obj[c]) {
    alert(`The result is ${eval(`${a} ${obj[c]} ${b}`)}`);
}
else{
    alert("chose one of 4 numers")
}