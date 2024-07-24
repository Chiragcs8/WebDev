console.log("I am tutorial on loops")

let a = 1;
for (let i = 0; i < 10; i++) 
    {
    console.log(a + i);
    
}
let obj = {
    name: "Rahul",
    age: 20,
    city: "Delhi"

}
for (const key in obj) {
        const element = obj[key];
        console.log(key ,element)
}
for (const x of "Xebec") {
    console.log(x)
}

let j = 0;
while (j<6) {
    console.log(j)
    j++;
    
}

let k = 10
do {
    console.log(k)
    k++;
} while (k<6);