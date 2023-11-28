"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotalScore = void 0;
const generateRandomScore_1 = require("./generateRandomScore");
function calculateTotalScore(frames) {
    let totalScore = 0;
    for (let frameNumber = 1; frameNumber <= 10; frameNumber++) {
        for (let tryNumber = 1; tryNumber <= 2; tryNumber++) {
            const isLastFrame = frameNumber === 10;
            const frameScore = (0, generateRandomScore_1.generateRandomScore)(frameNumber, tryNumber);
            totalScore += frameScore;
            totalScore += frameScore;
        }
    }
    return totalScore;
}
exports.calculateTotalScore = calculateTotalScore;
