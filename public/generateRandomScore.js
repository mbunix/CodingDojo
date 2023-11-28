"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomScore = exports.enterFrameDetails = void 0;
function enterFrameDetails(frameNumber, tryNumber, remainingPins) {
    return new Promise((resolve, reject) => {
        let score;
        if (remainingPins === undefined) {
            console.log(`Enter the score for frame ${frameNumber}, try ${tryNumber}:`);
            const stdin = process.openStdin();
            stdin.addListener("data", (input) => {
                const frameInput = input.toString().trim();
                if (frameInput === "") {
                    console.log("Invalid input. Please enter a valid score.");
                    return;
                }
                score = parseInt(frameInput);
                if (isNaN(score)) {
                    console.log("Invalid input. Please enter a valid number for the score.");
                    return;
                }
                if (frameNumber < 1 || frameNumber > 10) {
                    reject(new Error("Invalid input. Please enter a frame number between 1 and 10."));
                    return;
                }
                if (tryNumber !== 1 && tryNumber !== 2) {
                    reject(new Error("Invalid input. Please enter a try number of either 1 or 2."));
                    return;
                }
                stdin.removeAllListeners("data");
                stdin.pause();
                console.log(`Entered score: ${score}`);
                resolve(score);
            });
        }
        else {
            score = generateRandomScore(frameNumber, tryNumber, remainingPins);
            console.log(`Generated random score: ${score}`);
            resolve(score);
        }
    });
}
exports.enterFrameDetails = enterFrameDetails;
function generateRandomScore(frameNumber, tryNumber, remainingPins) {
    let score = 0;
    if (remainingPins === undefined) {
        if (tryNumber === 1) {
            score = Math.floor(Math.random() * 11); // Random score between 0 and 10
        }
        else if (tryNumber === 2) {
            const firstTryScore = generateRandomScore(frameNumber, 1);
            const remainingPins = 10 - firstTryScore; // Calculate remaining pins after the first turn
            score = Math.floor(Math.random() * (remainingPins + 1)); // Random score between 0 and remaining pins
        }
    }
    else {
        if (tryNumber === 1) {
            score = Math.floor(Math.random() * (remainingPins + 1)); // Random score between 0 and remaining pins
        }
        else if (tryNumber === 2) {
            const remainingPins = (score === 10) ? 10 : (10 - generateRandomScore(frameNumber, 1)); // Calculate remaining pins after the first turn
            score = Math.floor(Math.random() * (remainingPins + 1)); // Random score between 0 and remaining pins
        }
        else if (tryNumber === 3) {
            const firstTryScore = generateRandomScore(frameNumber, 1);
            const secondTryScore = generateRandomScore(frameNumber, 2);
            const remainingPins = (firstTryScore === 10 || secondTryScore === 10) ? 10 : (10 - secondTryScore); // Calculate remaining pins after the second turn
            score = Math.floor(Math.random() * (remainingPins + 1)); // Random score between 0 and remaining pins
        }
    }
    return score;
}
exports.generateRandomScore = generateRandomScore;
