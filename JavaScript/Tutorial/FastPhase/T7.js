let arr = [1, 2, 4, 5, 7];

arr[0] = 5666;
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);

console.log(arr.toString());
console.log(arr.join("and"));
console.log(arr.join(" "));

arr.pop();
console.log(arr);

arr.push(78);
arr.push("Xebec");
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("Rocks");
console.log(arr);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [9, 8, 7];

console.log(a1.concat(a2, a3));

console.log(a3.sort());

let number = [1, 2, 3, 4, 5];
console.log(number.splice(1, 3, 222, 333));
console.log(number);

let x = [1, 2, 93, 6, 76];

for (let index = 0; index < x.length; index++) {
    const element = x[index];
    console.log(element);
}

x.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

let obj = {
    a: 1,
    b: 2, 
    c: 3,
}

for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
    }
}

for (const iterator of x) {
    console.log(iterator);
}

let y = x.map((e)=>{
    return e ** 2
})
console.log(y);

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(x.filter(greaterThanSeven));

let arr2 = [1, 2, 3, 6, 7, 8, 9];


const red = (a, b)=>{
    return a * b
}

console.log(arr2.reduceRight(red))

let ab = Array.from("Xebec");
console.log(ab)