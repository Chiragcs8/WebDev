console.log("Learning Promise");

const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 resolved")
})

const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username: "abc", email: "abc@examle.com"})
    },1000)
})

PromiseThree.then((user)=>{
    console.log(user);
})

const PromiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if (!error){
            resolve({username: "def", password: "1234"})
        }else{
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

PromiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log("The Promise either resolved or rejected"))

const PromiseFive = new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        let error = true;
        if (!error){
            resolve({username: "javascript", password: "1234"})
        }else{
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getallusers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error)
//     }
// }
// getallusers()

fetch('https://api.github.com/users/chiragcs8')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)
)
