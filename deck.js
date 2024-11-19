"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const card_1 = require("./card");
const types_1 = require("./types");
const utils_1 = require("./utils");
class Deck {
    constructor() {
        this.deck = [];
    }
    setAndShuffleCards() {
        let cardArray = [];
        for (let suit of Deck.SUITS) {
            for (let i = 0; i < Object.keys(card_1.Card.CARD_VALUES).length; i++) {
                cardArray.push(new card_1.Card(i + 1, suit));
            }
        }
        this.deck = (0, utils_1.shuffleArray)(cardArray);
    }
    dealCards(numOfCards) {
        return [];
    }
}
exports.Deck = Deck;
Deck.SUITS = [types_1.Suit.Clubs, types_1.Suit.Diamonds, types_1.Suit.Hearts, types_1.Suit.Spades];
