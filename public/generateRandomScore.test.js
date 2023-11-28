"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateRandomScore_1 = require("./generateRandomScore");
describe("generateRandomScore", () => {
    it("should generate a random score between 0 and 10 for the first try in a frame", () => {
        const score = (0, generateRandomScore_1.generateRandomScore)(10, 1);
        expect(score).toBeGreaterThanOrEqual(0);
        expect(score).toBeLessThanOrEqual(10);
    });
    it("should generate a random score between 0 and remaining pins for the second try in a frame", () => {
        const firstTryScore = 5;
        const remainingPins = 10 - firstTryScore;
        const score = (0, generateRandomScore_1.generateRandomScore)(1, 2, remainingPins);
        expect(score).toBeGreaterThanOrEqual(0);
        expect(score).toBeLessThanOrEqual(remainingPins);
    });
    it("should generate a random score between 0 and remaining pins for the second try in the last frame", () => {
        const firstTryScore = 5;
        const remainingPins = 10 - firstTryScore;
        const score = (0, generateRandomScore_1.generateRandomScore)(10, 2, remainingPins);
        expect(score).toBeGreaterThanOrEqual(0);
        expect(score).toBeLessThanOrEqual(remainingPins);
    });
    it("should generate a random score between 0 and remaining pins for the third try in the last frame", () => {
        // Specify the type of firstTryScore as number
        const firstTryScore = 5;
        const remainingPins = 10 - firstTryScore;
        const score = (0, generateRandomScore_1.generateRandomScore)(10, 2, remainingPins);
        expect(score).toBeGreaterThanOrEqual(0);
        expect(score).toBeLessThanOrEqual(remainingPins);
    });
});
