console.log("learning about static property");

class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username: ${this.username}`);
    }

    static createid(){
        return `123`
    }
}

// const Chirag = new User("Chirag")
// console.log(Chirag.createid());

class Teacher extends User{
    constructor(username, email){
        super (username)
        this.email = email
    }
}

const iqoo = new Teacher("iqoo","iqoo@phone.com")

iqoo.logme();

// console.log(iqoo.createid());