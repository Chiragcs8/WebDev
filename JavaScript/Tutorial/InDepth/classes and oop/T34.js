console.log("learning about object based getter setter in js");

const User = {
    _email: "d@dg.com",
    _passwoed: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
