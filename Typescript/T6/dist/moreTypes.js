"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
let numericLength = response.length;
let bookString = '{"name": "who moved my chesse"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
// const inputElement = document.getElementById("username") as HTMLInputElement;
let value;
value = "Hello World";
value = [1, 2, 3];
value = 2.5;
// value.toUpperCase()
let newValue;
newValue = "Hello World";
newValue = [1, 2, 3];
newValue = 2.5;
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
const data = "Hello Typescript";
const strData = data;
function redireactBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redireacting to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redireacting to user dashboard");
        return;
    }
    role;
}
function neverReturn() {
    while (true) { }
}
//# sourceMappingURL=moreTypes.js.map