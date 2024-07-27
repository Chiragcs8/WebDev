console.log("this is code for finding factorials")

// Way 1


// let a = 7;
// let a1 = [];
// function factorials() {
    
//     for (let i = 1; i <= a; i++) {
//         a1.push(i)
//     }
    
    
//     const red = (a, b)=>a*b
//     console.log(a1)
//     let c = a1.reduceRight(red);
//     return c
// }
// console.log(factorials())


// Way 2

// let a = 6;

// function factorials(number) {
//     let arr = Array.from(Array(number+1).keys())
//     console.log (arr.slice(1,))
    // let c = arr.slice(1,).reduce((a,b)=>a*b)
//     console.log (c)
// }
// factorials(a)


// Way 3


let a = 7;

function facFor(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index;
        
    }
    return fac
}

console.log(facFor(a))

