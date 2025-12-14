"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const juice = {
    name: "Lemon Juice",
    price: 10,
    isCold: true
};
// {
//     name: string;
//     price: number;
//     isCold: boolean;
// }
let water;
water = {
    name: "Lemon water",
    price: 25,
    isCold: true
};
const orengeJuice = {
    name: "Orenge Juice",
    price: 15,
    ingrediants: ["orenge", "sugar", "water"]
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arabica" };
const teaBrew = coffee;
const u = {
    username: "Chirag",
    password: "123"
};
const updateTea = (updates) => {
    console.log("updating Tea with", updates);
};
updateTea({ price: 20 });
updateTea({ isHot: false });
updateTea({});
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "Green Tea",
    quantity: 2
});
const chaiInfo = {
    name: "lemon Tea",
    price: 30
};
//# sourceMappingURL=objectTS.js.map