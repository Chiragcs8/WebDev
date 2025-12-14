"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getWater(kind) {
    if (typeof kind === 'string') {
        return `making ${kind} water...`;
    }
    return `Water order ${kind}`;
}
function serveWater(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving defualt water`;
}
function orderWater(size) {
    if (size === 'small') {
        return `small water cup`;
    }
    if (size === 'medium' || size === 'large') {
        return 'big water cup';
    }
    return ` water order #${size}`;
}
class MintedWater {
    serve() {
        return `Serving Minted Water`;
    }
}
class PlainWater {
    serve() {
        return `Serving Plain Water`;
    }
}
function serve(water) {
    if (water instanceof MintedWater) {
        return water.serve();
    }
}
function isWaterOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.mint === "number");
}
function serveOrder(item) {
    if (isWaterOrder(item)) {
        return `Serving ${item.type} water with ${item.mint} mint leaves`;
    }
    return `Serving custom water: ${item}`;
}
function MakeWater(order) {
    switch (order.type) {
        case 'lemon':
            return 'Lemon Water';
            break;
        case 'orenge':
            return 'Orenge Water';
            break;
    }
}
function mix(order) {
    if ("lemonSlices" in order) {
        //
    }
}
function isStringArray(arr) {
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}
//# sourceMappingURL=typeNarrowing.js.map