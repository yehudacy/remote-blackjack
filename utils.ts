import PromptSync from "prompt-sync";
import { DecisionOptions } from "./types";

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
        playersBet = parseInt(prompt("Please place your bet! "));
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

