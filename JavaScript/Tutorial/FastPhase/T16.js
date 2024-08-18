// let obj = {
//     a:1,
//     b:"Xebec"
// }


// let animal = {
//     eat: true
// }

// let cheetah = {
//     runs: true
// }

// cheetah.__proto__ = animal;

// console.log(obj)

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eat(){
        console.log("Eating...")
    }

    run(){
        console.log("Running...")
    }
}

class lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created and he is lion...")
    }

    eat(){
        super.eat()
        console.log("Lion is eating...")
    }
    
}



let a = new Animal("Cheetah"); 
console.log(a)

let l = new lion("lioness"); 
console.log(l)


class User {
    constructor(name) {
        this.name = name;
    }

    get name (){
        return this._name;
    }

    set name (value) {
        if (value.length < 4){
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name);

user.name = ("")
user.name = "Xebec"
console.log(user.name);