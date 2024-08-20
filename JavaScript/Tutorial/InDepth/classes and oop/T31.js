console.log("learning about more objects in adv");

const desriptor = Object.getOwnPropertyDescriptor(Math, "PI"); // getting pi value from math obj

console.log(desriptor);

// console.log(Math.PI);
// Math,PI = 5
// console.log(Math.PI);

const chai = {
  name: "masala chai",
  price: 350,
  isAvailable: true,

  orederChai: function () {
    console.log("code nahi chalega");
  },
};

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false,
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    {
      console.log(`${key} : ${value}`);
    }
  }
}
