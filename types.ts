export interface ICard {
    value : number;
    suit : Suit;
    getName(): string
}

export interface  IDeck {
    setAndShuffleCards(): void;
    dealCards(numOfCards: number): ICard[];
}

export enum Suit {
    Hearts = "♥",
    Clubs = "♣",
    Spades = "♠",
    Diamonds = "♦",
}

export type DecisionOptions = "hit" | "stand";

