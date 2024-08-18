console.log("Learning Classes constructor and static");


// class user {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encyptPassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai", "chai@gmail.com", "123")

// console.log(chai.encyptPassword());
// console.log(chai.changeusername());

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encyptPassword = function () {
    return `${this.password}abc`
    
}
User.prototype.changeusername = function () {
    return `${this.username.toUpperCase()}`
}
const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea.encyptPassword());
console.log(tea.changeusername());

