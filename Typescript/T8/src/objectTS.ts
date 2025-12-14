const juice = {
    name : "Lemon Juice",
    price: 10,
    isCold: true
}

// {
//     name: string;
//     price: number;
//     isCold: boolean;
// }

let water: {
    name: string;
    price: number;
    isCold: boolean;
}
water = {
    name:"Lemon water",
    price: 25,
    isCold: true
}

type Juice = {
    name: string;
    price: number;
    ingrediants: string[];
}

const orengeJuice: Juice = {
    name: "Orenge Juice",
    price: 15,
    ingrediants: ["orenge", "sugar", "water"]
}

type Cup = {size: string, material?: string};

let smallCup: Cup = {size: "200ml"};

let bigCup: Cup = {size: "500ml", material: "steel"};

smallCup = bigCup;

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const teaBrew: Brew = coffee

type User = {
    username: string;
    password: string;
}

const u: User = {
    username: "Chirag",
    password: "123"
}


type Item= {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}

type Tea = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateTea = (updates: Partial<Tea>) => {
    console.log("updating Tea with", updates);
    
}

updateTea({price: 20});
updateTea({isHot:false})
updateTea({})

type TeaOrder = {
    name?: string;
    quantity?: number;
}

const placeOrder = (order: Required<TeaOrder>) => {
    console.log(order);
    
}

placeOrder({
    name: "Green Tea", 
    quantity: 2});

type tea = {
    name: string;
    price: number;
    isHot: boolean;
    ingrediants: string[];
}

type BasicTeaInfo = Pick<tea, "name" | "price">;

const chaiInfo: BasicTeaInfo = {
    name: "lemon Tea",
    price: 30
}

type TeaNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngrediants: string;
}

type PublicTea = Omit<TeaNew, "secretIngrediants">;