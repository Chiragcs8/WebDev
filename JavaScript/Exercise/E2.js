console.log("Genrating Bussiness name without using arryas");

function ran(a, b, c) {
    const random = Math.floor(Math.random() * 3);
if (random == 0) {
    return a;
}
else if (random == 1) {
    return b;
}
else {
    return c;
    }
}

function GetAdjectives() {
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire";
    return ran(a, b, c)
}
function GetShop_name() {
    let a = "Engine";
    let b = "Foods";
    let c = "Garments";
    return ran(a, b, c)
}
function GetAnother_word() {
    let a = "Bros";
    let b = "Limited";
    let c = "Hub";
    return ran(a, b, c)
}

function GenratingBusinessame() {
    let Adjectives = GetAdjectives();
    let Shop_name = GetShop_name();
    let Another_word = GetAnother_word();

    return Adjectives + Shop_name + Another_word
}
console.log(GenratingBusinessame())