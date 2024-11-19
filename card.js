"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    getName() {
        return Card.CARD_VALUES[this.value];
    }
}
exports.Card = Card;
Card.CARD_VALUES = {
    1: "A",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "J",
    12: "Q",
    13: "K",
};
