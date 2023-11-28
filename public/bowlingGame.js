"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowlingGame = void 0;
const generateRandomScore_1 = require("./generateRandomScore");
class BowlingGame {
    constructor() {
        this.rolls = [];
        const frameDetails = [
            { frame: 1, attempt: 1 },
            { frame: 1, attempt: 2 },
            { frame: 2, attempt: 1 },
            { frame: 2, attempt: 2 },
            { frame: 3, attempt: 1 },
            { frame: 3, attempt: 2 },
            { frame: 4, attempt: 1 },
            { frame: 4, attempt: 2 },
            { frame: 5, attempt: 1 },
            { frame: 5, attempt: 2 },
            { frame: 6, attempt: 1 },
            { frame: 6, attempt: 2 },
            { frame: 7, attempt: 1 },
            { frame: 7, attempt: 2 },
            { frame: 8, attempt: 1 },
            { frame: 8, attempt: 2 },
            { frame: 9, attempt: 1 },
            { frame: 9, attempt: 2 },
            { frame: 10, attempt: 1 },
            { frame: 10, attempt: 2 },
            // Add more frames and attempts as needed
        ];
        frameDetails.forEach(({ frame, attempt }) => {
            (0, generateRandomScore_1.enterFrameDetails)(frame, attempt).then((score) => {
                this.rolls.push(score);
                if (score === 10) {
                    return; // Move to the next frame if it's a strike
                }
                const remainingPins = 10 - score;
            });
        });
        this.rolls = [];
    }
    roll(pins) {
        this.rolls.push(pins);
    }
    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }
    isSpare(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }
    strikeBonus(rollIndex) {
        return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }
    spareBonus(rollIndex) {
        return this.rolls[rollIndex + 2];
    }
    sumOfBallsInFrame(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
    score() {
        let totalScore = 0;
        let rollIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollIndex)) {
                totalScore += 10 + this.strikeBonus(rollIndex);
                rollIndex++;
            }
            else if (this.isSpare(rollIndex)) {
                totalScore += 10 + this.spareBonus(rollIndex);
                rollIndex += 2;
            }
            else {
                totalScore += this.sumOfBallsInFrame(rollIndex);
                rollIndex += 2;
            }
        }
        return totalScore;
    }
}
exports.BowlingGame = BowlingGame;
