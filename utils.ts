import PromptSync from "prompt-sync";
import { DecisionOptions } from "./types";
import { Card } from "./card";

const prompt = PromptSync();

export function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function getPlayersBet(balance: number): number {
    let isValidBet: boolean = false;
    let playersBet: number = -1;
    while (!isValidBet) {
        playersBet = parseInt(prompt("Please place your bet! $"));
        if (playersBet && playersBet > 0 && playersBet <= balance) {
            isValidBet = true
            return playersBet;
        }
        console.log("Invalid bet!!");
    }
    return playersBet;
}

export function getPlayersDecision(): DecisionOptions {
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

export function getCardsValue(cards: Card[]): number {
    let totalValue: number = 0;
    let aceCount: number = 0;
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

export function cardsValueToString(cards: Card[], hideSecondCard: boolean = false): string {
    let cardsString: string = ``;
    if(!hideSecondCard) {
        for(const card of cards){
            cardsString += `${singleCardToString(card)},`;
        }
    } else {
        cardsString += singleCardToString(cards[0]);
        cardsString += "[hidden]"
    }
   
    return cardsString;
}

function getCardValue(card: Card): number {
    const cardValue: number = card.value;
    if (cardValue > 10) {
        return 10;
    }
    return cardValue;
}


function calcAceValues(totalValue: number, numOfAces: number): number {
    let maxAceValue: number = numOfAces * 11;
    while(totalValue <= 21){
        if(totalValue + maxAceValue <= 21){
            return totalValue + maxAceValue;
        }
        totalValue++;
        maxAceValue -= 11;
    }
    return totalValue;
}

function singleCardToString(card: Card): string {
    return `${card.getName()} ${card.suit}`;
}

