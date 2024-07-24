console.log("Hello i am condition tutorial")

let age = 16;
let grace = 3;

console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)
// age **= grace
// console.log(age)


if( (age + grace) > 18){
    console.log("You are eligible to vote")
}
else if(age == 0){
    console.log("Are you kidding")
}
else{
    console.log("You are not eligible to vote")
}

let a= 5;
let b= 10;
let c= a>b?(a-b):(b-a)
console.log(c)