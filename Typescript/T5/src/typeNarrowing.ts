function getWater(kind: string | number) {
    if (typeof kind === 'string') {
        return `making ${kind} water...`
    }
    return `Water order ${kind}`
}

function serveWater(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving defualt water`
}

function orderWater(size: 'small' | 'medium' | 'large'){
    if (size === 'small') {
        return `small water cup`
    }
    if (size === 'medium' || size === 'large'){
        return 'big water cup'
    }
    return  ` water order #${size}`
}

class MintedWater {
    serve(){
        return `Serving Minted Water`
    }
}

class PlainWater {
    serve(){
        return `Serving Plain Water`
    }
}

function serve(water: MintedWater | PlainWater){
    if (water instanceof MintedWater){
        return water.serve()
    }
}

type WaterOrder = {
    type: string
    mint: number
}

function isWaterOrder(obj: any): obj is WaterOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.mint === "number" 
    )
}

function serveOrder(item:WaterOrder | string){
    if (isWaterOrder(item)) {
        return`Serving ${item.type} water with ${item.mint} mint leaves`
    }
    return `Serving custom water: ${item}`
}

type lemonWater = {type: 'lemon'; lemonSlices: number};
type OrengeWater = {type: 'orenge'; OrengeSlices: number};

type Water = lemonWater | OrengeWater;

function MakeWater(order: Water){
    switch(order.type){
        case 'lemon':
            return 'Lemon Water'
            break;
        case 'orenge':
            return 'Orenge Water'
            break;
    }
}

function mix(order: lemonWater | OrengeWater){
    if ("lemonSlices" in order) {
        //
    }
}

function isStringArray(arr: unknown): arr is string[]{
    return Array.isArray(arr) && arr.every(item  => typeof item === "string");
}