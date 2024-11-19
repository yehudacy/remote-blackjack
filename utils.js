"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = shuffleArray;
exports.getPlayersBet = getPlayersBet;
exports.getPlayersDecision = getPlayersDecision;
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
        playersBet = parseInt(prompt("Please place your bet! "));
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
