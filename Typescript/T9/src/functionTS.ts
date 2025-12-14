function makeJuice (type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`);
}

makeJuice("Orange Juice", 3)

function getJuicePrice():number{
    // return "5"
    return 5
}

function makeOrder(order: string){
    if(!order) return null
    return order
}

function logJuice(): void {
    console.log("Juice is ready");
}

// function orderJuice(type?: string){
    
// }
function orderJuice(type: string = "Orange"){
    
}

function createJuice (order: {
    type:string;
    suger: number;
    size: "small" | "large"
}): number {
    return 4
}