console.log('This tutorial about Promises');

console.log('This is Promises');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("O random number was not supporting you")
    }
    else{
    setTimeout(() => {
        console.log('Yes i am done');
        resolve("Xebec")
    })
    }
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("O random number was not supporting you 2")
    }
    else{
    setTimeout(() => {
        console.log('Yes i am done 2');
        resolve("Xebec 2")
    })
    }
})


// prom1.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

let p3 = Promise.any([prom1, prom2])

p3.then((a)=>{
    console.log(a);
}).catch(err=>{
    console.log(err);
})

