"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = shuffleArray;
exports.getPlayersBet = getPlayersBet;
exports.getPlayersDecision = getPlayersDecision;
exports.getCardsValue = getCardsValue;
exports.cardsValueToString = cardsValueToString;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function getPlayersBet(balance) {
    let isValidBet = false;
    let playersBet = -1;
    while (!isValidBet) {
        playersBet = parseInt(prompt("Please place your bet! $"));
        if (playersBet && playersBet > 0 && playersBet <= balance) {
            isValidBet = true;
            return playersBet;
        }
        console.log("Invalid bet!!");
    }
    return playersBet;
}
function getPlayersDecision() {
    let isValidDecision = false;
    while (!isValidDecision) {
        const decision = prompt("Do you want to Hit or Stand?");
        if (decision === "hit" || decision === "stand") {
            isValidDecision = true;
            return decision;
        }
        console.log("Invalid decision!!");
    }
    return "hit";
}
function getCardsValue(cards) {
    let totalValue = 0;
    let aceCount = 0;
    for (let i = 0; i < cards.length; i++) {
        const cardValue = getCardValue(cards[i]);
        if (cardValue === 1) {
            aceCount++;
            continue;
        }
        totalValue += cardValue;
    }
    return calcAceValues(totalValue, aceCount);
}
function cardsValueToString(cards, hideSecondCard = false) {
    let cardsString = ``;
    if (!hideSecondCard) {
        for (const card of cards) {
            cardsString += `${singleCardToString(card)},`;
        }
    }
    else {
        cardsString += singleCardToString(cards[0]);
        cardsString += "[hidden]";
    }
    return cardsString;
}
function getCardValue(card) {
    const cardValue = card.value;
    if (cardValue > 10) {
        return 10;
    }
    return cardValue;
}
function calcAceValues(totalValue, numOfAces) {
    let maxAceValue = numOfAces * 11;
    while (totalValue <= 21) {
        if (totalValue + maxAceValue <= 21) {
            return totalValue + maxAceValue;
        }
        totalValue++;
        maxAceValue -= 11;
    }
    return totalValue;
}
function singleCardToString(card) {
    return `${card.getName()} ${card.suit}`;
}
