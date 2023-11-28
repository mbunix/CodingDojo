"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playGame = void 0;
const generateRandomScore_1 = require("./generateRandomScore");
const bowlingGame_1 = require("./bowlingGame");
function playGame() {
    return __awaiter(this, void 0, void 0, function* () {
        const bowlingGame = new bowlingGame_1.BowlingGame();
        for (let frameNumber = 1; frameNumber <= 10; frameNumber++) {
            const firstTryScore = yield (0, generateRandomScore_1.enterFrameDetails)(frameNumber, 1);
            bowlingGame.roll(firstTryScore);
            if (firstTryScore === 10) {
                continue; // Move to the next frame if it's a strike
            }
            const remainingPins = 10 - firstTryScore;
            const secondTryScore = yield (0, generateRandomScore_1.enterFrameDetails)(frameNumber, 2, remainingPins);
            bowlingGame.roll(secondTryScore);
        }
        const totalScore = bowlingGame.score();
        console.log(`Total score: ${totalScore}`);
        console.log("Press any key to continue...");
    });
}
exports.playGame = playGame;
playGame();
