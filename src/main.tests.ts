import { enterFrameDetails } from "./generateRandomScore";
import { BowlingGame } from "./bowlingGame";
import { playGame } from "./main";
jest.mock("./generateRandomScore", () => ({
  enterFrameDetails: jest.fn()
}));

describe("playGame", () => {
  let bowlingGame: BowlingGame;

  beforeEach(() => {
    bowlingGame = new BowlingGame();
    (enterFrameDetails as jest.Mock).mockClear();
  });

  it("should roll the correct scores for each frame", async () => {
    (enterFrameDetails as jest.Mock)
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
    
    await playGame();
    
      expect(bowlingGame.score()).toBe(110);
    expect(enterFrameDetails).toHaveBeenCalledTimes(20);
    expect(enterFrameDetails).toHaveBeenCalledWith(1, 1);
    expect(enterFrameDetails).toHaveBeenCalledWith(1, 2, 6);
    // 
  });
});

