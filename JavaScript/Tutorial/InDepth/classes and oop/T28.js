console.log("Learning about inheritance");

class User {
    constructor(username) {
        this.username = username
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()
const masalachai = new User("masalachai")

masalachai.logme()

console.log(Teacher instanceof User);//false beacuse teacher is class not an object so it can't use instanceof user in right way
console.log(Teacher.prototype instanceof User);// true
