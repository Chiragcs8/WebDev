console.log("Learning about Prototype");

// let myName = "Chirag     "
// let mychannel = "Chai      "

// console.log(myName.trueLength);


let myHero =["hulk", "spiderman"]


let heroPower ={
    hulk: "smash",
    spiderman: "sling",
    
    getSpiderPower:function () {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.chirag = function () {
    console.log(`chirag is present in all objects`);
    
}

Array.prototype.heyChirag = function () {
    console.log(`Chirag says hello`);
    
}

// heroPower.chirag()
// myHero.chirag()
// myHero.heyChirag()
// heroPower.heyChirag() //this will not work

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fillTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Chai      "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()

"Chirag ".truelength()
"iceTea ".truelength()
