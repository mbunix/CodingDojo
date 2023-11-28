import { calculateTotalScore } from "./calculateTotalScore";

describe("calculateTotalScore", () => {
  it("should calculate the total score correctly for all strikes", () => {
    const frames = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    const totalScore = calculateTotalScore(frames);
    expect(totalScore).toBe(300);
  });

  it("should calculate the total score correctly for all spares", () => {
    const frames = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    const totalScore = calculateTotalScore(frames);
    expect(totalScore).toBe(187);
    expect(totalScore).toBe(150);
  });

  it("should calculate the total score correctly for a mix of strikes, spares, and open frames", () => {
    const frames = [10, 5, 5, 7, 2, 10, 9, 0, 10, 10, 10, 6, 4, 8, 2, 10, 9, 1];
    const totalScore = calculateTotalScore(frames);
    expect(totalScore).toBe(187);
  });

  it("should calculate the total score correctly for all open frames", () => {
    const frames = [3, 4, 6, 2, 7, 1, 4, 3, 2, 5, 8, 1, 3, 2, 4, 5, 1, 2];
    const totalScore = calculateTotalScore(frames);
    expect(totalScore).toBe(73);
  });

  it("should calculate the total score correctly for a gutter game", () => {
    const frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const totalScore = calculateTotalScore(frames);
    expect(totalScore).toBe(0);
  });
});