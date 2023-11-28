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
const generateRandomScore_1 = require("./generateRandomScore");
const bowlingGame_1 = require("./bowlingGame");
const main_1 = require("./main");
jest.mock("./generateRandomScore", () => ({
    enterFrameDetails: jest.fn()
}));
describe("playGame", () => {
    let bowlingGame;
    beforeEach(() => {
        bowlingGame = new bowlingGame_1.BowlingGame();
        generateRandomScore_1.enterFrameDetails.mockClear();
    });
    it("should roll the correct scores for each frame", () => __awaiter(void 0, void 0, void 0, function* () {
        generateRandomScore_1.enterFrameDetails
            .mockResolvedValueOnce(4)
            .mockResolvedValueOnce(2)
            .mockResolvedValueOnce(9)
            .mockResolvedValueOnce(1)
            .mockResolvedValueOnce(10)
            .mockResolvedValueOnce(0)
            .mockResolvedValueOnce(6)
            .mockResolvedValueOnce(4)
            .mockResolvedValueOnce(2)
            .mockResolvedValueOnce(3)
            .mockResolvedValueOnce(10)
            .mockResolvedValueOnce(0)
            .mockResolvedValueOnce(10)
            .mockResolvedValueOnce(5)
            .mockResolvedValueOnce(5)
            .mockResolvedValueOnce(10)
            .mockResolvedValueOnce(0)
            .mockResolvedValueOnce(3)
            .mockResolvedValueOnce(7)
            .mockResolvedValueOnce(1);
        yield (0, main_1.playGame)();
        expect(bowlingGame.score()).toBe(110);
        expect(generateRandomScore_1.enterFrameDetails).toHaveBeenCalledTimes(20);
        expect(generateRandomScore_1.enterFrameDetails).toHaveBeenCalledWith(1, 1);
        expect(generateRandomScore_1.enterFrameDetails).toHaveBeenCalledWith(1, 2, 6);
        // 
    }));
});
