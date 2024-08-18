console.log("today we going to learn ids classes and more");

let boxes = document.getElementsByClassName("box");

console.log(boxes);

boxes[2].style.backgroundColor = "red";

document.getElementById("green").style.backgroundColor = "green"

document.querySelector(".box").style.backgroundColor = "blue"

console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = "gray"
// });

