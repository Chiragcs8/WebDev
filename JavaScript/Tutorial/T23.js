const user = {
    username: "Chirag",
    loginCount: 8,
    signedin: true,

    getUserDetail: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }

}

// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this);

function User(username, loginCount, isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    this.greeting = function(){
        console.log(`Welcome${this.username}`);
        
    }

    return this  //it implictly gets defines
}

const userOne = new User("Chirag", 12, true) // new uses to create empty objects. 
const userTwo = new User("Xebec", 11, true) // if you don't use new next object will overright firstone.

console.log(userOne);
console.log(userTwo);
