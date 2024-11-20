"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deck_1 = require("./deck");
const utils_1 = require("./utils");
function player(playerCards, deck) {
    let cardsValue = (0, utils_1.getCardsValue)(playerCards);
    let action = (0, utils_1.getPlayersDecision)();
    while (action === "hit") {
        const newCard = deck.dealCards(1);
        console.log({ newCard });
        playerCards.push(newCard[0]);
        console.log(`Player cards - ${(0, utils_1.cardsValueToString)(playerCards)} (Total: ${(0, utils_1.getCardsValue)(playerCards)})`);
        cardsValue = (0, utils_1.getCardsValue)(playerCards);
        if (cardsValue > 21) {
            return cardsValue;
        }
        action = (0, utils_1.getPlayersDecision)();
    }
    return cardsValue;
}
function dealer(dealerCards, deck) {
    let cardsValue = (0, utils_1.getCardsValue)(dealerCards);
    if (cardsValue >= 17) {
        console.log(`Dealer cards - ${(0, utils_1.cardsValueToString)(dealerCards)} (Total: ${cardsValue})`);
        return cardsValue;
    }
    do {
        console.log(`Dealer cards - ${(0, utils_1.cardsValueToString)(dealerCards)} (Total: ${cardsValue})`);
        const newCard = deck.dealCards(1);
        dealerCards.push(newCard[0]);
        cardsValue = (0, utils_1.getCardsValue)(dealerCards);
    } while (cardsValue < 17);
    console.log(`Dealer cards - ${(0, utils_1.cardsValueToString)(dealerCards)} (Total: ${(0, utils_1.getCardsValue)(dealerCards)})`);
    return cardsValue;
}
function round() {
    let playerCards = [];
    let dealerCards = [];
    const deck = new deck_1.Deck();
    let balance = 100;
    while (balance > 0) {
        console.log(`Player currently has $${balance}`);
        const playersBet = (0, utils_1.getPlayersBet)(balance);
        balance -= playersBet;
        deck.setAndShuffleCards();
        playerCards = deck.dealCards(2);
        dealerCards = deck.dealCards(2);
        const playerCardsValue = (0, utils_1.getCardsValue)(playerCards);
        const dealerCardsValue = (0, utils_1.getCardsValue)(dealerCards);
        console.log(`Player cards - ${(0, utils_1.cardsValueToString)(playerCards)} (Total: ${playerCardsValue})`);
        console.log(`Dealer cards - ${(0, utils_1.cardsValueToString)(dealerCards, true)}`);
        if (playerCardsValue === 21) {
            balance += playersBet * 2.5;
            console.log(`Blackjack!!! You wan $${playersBet * 2.5}`);
            continue;
        }
        else if (dealerCardsValue === 21) {
            console.log(`Dealer cards - ${(0, utils_1.cardsValueToString)(dealerCards)} (total ${dealerCardsValue})`);
            console.log(`Dealer has blackjack!!! You lost $${playersBet}`);
            continue;
        }
        const finalPlayer = player(playerCards, deck);
        if (finalPlayer > 21) {
            console.log(`You exceeded 21!!! You lost $${playersBet}`);
            continue;
        }
        const finalDealer = dealer(dealerCards, deck);
        if (finalDealer > 21 || finalPlayer > finalDealer) {
            balance += playersBet * 2.5;
            console.log(`You won $${playersBet * 2.5}`);
            continue;
        }
        else if (finalPlayer === finalDealer) {
            balance += playersBet;
            console.log(`Push(tie)!!! You got your bet back $${playersBet}`);
        }
        else {
            console.log(`Dealer won!!! You lost $${playersBet}`);
        }
    }
    console.log(`Tou are out of money game over!!!`);
}
round();
