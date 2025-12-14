type WaterOrder = { 
    type: string;
    mint: number;
    strong: boolean };

function makeWater(order: WaterOrder) {
  console.log(order);
}

function serveWater(order: WaterOrder) {
  console.log(order);
}


type WaterRecipe = {
    water: number;
    mintleaves: number;
}

class mintedWater implements WaterRecipe {
    water = 200;
    mintleaves = 5;
}

interface CupSize {
    size: "small" | "medium" | "large"
}

class Water implements CupSize{
    size: "small" | "medium" | "large" = "medium";
}

// type response = {ok: true} | {ok: false}
// class myRes implements Response{
//     ok: boolean = true;
// }

type WaterType = "still" | "sparkling";

function orderWater(t: WaterType){
    console.log(t);
}

type PlainWater = {type: number;}
type Extra = {lemon: number;}

type LemonWater = PlainWater & Extra;

const cup: LemonWater = {
    lemon: 1,
    type:2
}

type User = {
    username: string;
    bio?: string;
}

const u1: User = {username: "Chirag"}
const u2: User = {username: "Chirag", bio: "Hello I am Chirag"}


type Config = {
    readonly appName: string;
    version: number
}

const cfg: Config = {
    appName: "Waterapp",
    version: 1
}

// cfg.appName = "Xebec"