console.log("learning about getter setter in js");

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email(){
    return this._email.toUpperCase();
  }
  set email(value){
    return this._email = value
  }

  get password() {
    return (`${this._password}Chirag`);
  }
  set password(value){
    this._password = value
  }
}

const Chirag = new User("abc@ai.com", "123");
console.log(Chirag.password);
console.log(Chirag.email);

