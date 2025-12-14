let response: any = "42";

let numericLength: number = (response as string).length

type Book = {
    name: string
}

let bookString = '{"name": "who moved my chesse"}'

let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

// const inputElement = document.getElementById("username") as HTMLInputElement;


let value: any

value = "Hello World"
value = [1,2,3]
value = 2.5
// value.toUpperCase()

let newValue: unknown

newValue = "Hello World"
newValue = [1,2,3]
newValue = 2.5

if (typeof newValue === "string"){
    newValue.toUpperCase()
}

try {
    
} catch (error) {
    if (error instanceof Error){
        console.log(error.message);
    }
    console.log("Error",error);
    
}

const data: unknown = "Hello Typescript"
const strData: string = data as string

type Role = "admin" | "user" |"superadmin"

function redireactBasedOnRole(role: Role): void{
    if (role === "admin") {
        console.log("Redireacting to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redireacting to user dashboard");
        return;
    }
    role;
}

function neverReturn(): never{
    while (true){}
}
