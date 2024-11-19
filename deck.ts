import { Card } from "./card";
import { ICard, IDeck, Suit } from "./types";
import { shuffleArray } from "./utils";

export class Deck implements IDeck {

    private deck: Card[] = [];
    static readonly SUITS: Suit[] = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades]
    
    setAndShuffleCards(): void {
        let cardArray: Card[] = [];
        for (let suit of Deck.SUITS) {
            for(let i = 0; i < Object.keys(Card.CARD_VALUES).length; i++){
                cardArray.push(new Card( i + 1, suit));
            }
        }
        this.deck =  shuffleArray(cardArray);        
    }

    dealCards(numOfCards: number): Card[] {
        return []
    }
}