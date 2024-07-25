console.log("This is Tutorial on Function");

function H(name) {
  console.log("Hey" + name + "you are nice");
  console.log("Hey" + name + "your tutorial codes are clean");
}
function sum(a, b, c = 3) {
  console.log(a, b, c)
  return a + b + c;
}
H("Chirag");
H("Xebec");
sum(10, 20);
let result1 = sum(20, 30);
let result2 = sum(10, 50);
let result3 = sum(10, 20, 30);
let result4 = sum(10);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

const func1 = (x) =>{
    console.log("i am an arrow function", x)
}

func1(34)
func1(55)
