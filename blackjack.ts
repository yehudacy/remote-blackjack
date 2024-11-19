import { Card } from "./card";
import { Deck } from "./deck";
import { ICard, Suit } from "./types";
import { getPlayersBet, getPlayersDecision, shuffleArray } from "./utils";


function player(): number {
    return 0;
}

function dealer(): number {
    return 0;
}


let playerCards: ICard[] = [];    
let dealerCards: ICard[] = [];

const deck: Deck = new Deck();

let balance: number = 100;

while(balance > 0){
    console.log(`Player currently has ${balance}$`);
    const playersBet: number = getPlayersBet(balance);
    balance -= playersBet;
    

}

