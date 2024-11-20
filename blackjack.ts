import { Card } from "./card";
import { Deck } from "./deck";
import { DecisionOptions, ICard, Suit } from "./types";
import { cardsValueToString, getCardsValue, getPlayersBet, getPlayersDecision, shuffleArray } from "./utils";


function player(playerCards: ICard[], deck: Deck): number {
    let cardsValue: number = getCardsValue(playerCards);

    let action: DecisionOptions = getPlayersDecision();
    while (action === "hit") {
        const newCard: Card[] = deck.dealCards(1);
        console.log({ newCard });
        playerCards.push(newCard[0]);
        console.log(`Player cards - ${cardsValueToString(playerCards)} (Total: ${getCardsValue(playerCards)})`);
        cardsValue = getCardsValue(playerCards);
        if (cardsValue > 21) {
            return cardsValue
        }
        action = getPlayersDecision();
    }
    return cardsValue;
}

function dealer(dealerCards: ICard[], deck: Deck): number {
    let cardsValue: number = getCardsValue(dealerCards);
    if (cardsValue >= 17) {
        console.log(`Dealer cards - ${cardsValueToString(dealerCards)} (Total: ${cardsValue})`);
        return cardsValue;
    }
    do {
        console.log(`Dealer cards - ${cardsValueToString(dealerCards)} (Total: ${cardsValue})`);
        const newCard: Card[] = deck.dealCards(1);
        dealerCards.push(newCard[0]);
        cardsValue = getCardsValue(dealerCards);
    } while (cardsValue < 17);
    console.log(`Dealer cards - ${cardsValueToString(dealerCards)} (Total: ${getCardsValue(dealerCards)})`);
    return cardsValue;
}

function round() {
    let playerCards: ICard[] = [];
    let dealerCards: ICard[] = [];

    const deck: Deck = new Deck();

    let balance: number = 100;

    while (balance > 0) {
        console.log(`Player currently has $${balance}`);
        const playersBet: number = getPlayersBet(balance);
        balance -= playersBet;

        deck.setAndShuffleCards();
        playerCards = deck.dealCards(2);
        dealerCards = deck.dealCards(2);

        const playerCardsValue: number = getCardsValue(playerCards)
        const dealerCardsValue: number = getCardsValue(dealerCards)

        console.log(`Player cards - ${cardsValueToString(playerCards)} (Total: ${playerCardsValue})`);
        console.log(`Dealer cards - ${cardsValueToString(dealerCards, true)}`);

        if (playerCardsValue === 21) {
            balance += playersBet * 2.5;
            console.log(`Blackjack!!! You wan $${playersBet * 2.5}`);
            continue;
        } else if (dealerCardsValue === 21) {
            console.log(`Dealer cards - ${cardsValueToString(dealerCards)} (total ${dealerCardsValue})`);
            console.log(`Dealer has blackjack!!! You lost $${playersBet}`);
            continue;
        }

        const finalPlayer: number = player(playerCards, deck);
        if (finalPlayer > 21) {
            console.log(`You exceeded 21!!! You lost $${playersBet}`);
            continue;
        }

        const finalDealer: number = dealer(dealerCards, deck);
        if (finalDealer > 21 || finalPlayer > finalDealer) {
            balance += playersBet * 2.5;
            console.log(`You won $${playersBet * 2.5}`);
            continue;
        } else if (finalPlayer === finalDealer) {
            balance += playersBet;
            console.log(`Push(tie)!!! You got your bet back $${playersBet}`);
        } else {
            console.log(`Dealer won!!! You lost $${playersBet}`);
        }
    }

    console.log(`Tou are out of money game over!!!`);
}
round();