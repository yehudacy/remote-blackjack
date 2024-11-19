"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deck_1 = require("./deck");
const utils_1 = require("./utils");
function player() {
    return 0;
}
function dealer() {
    return 0;
}
let playerCards = [];
let dealerCards = [];
const deck = new deck_1.Deck();
let balance = 100;
while (balance > 0) {
    console.log(`Player currently has ${balance}$`);
    const playersBet = (0, utils_1.getPlayersBet)(balance);
    balance -= playersBet;
}
