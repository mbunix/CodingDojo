import { generateRandomScore } from "./generateRandomScore";

export function calculateTotalScore(frames:number []): number {
  let totalScore = 0;

  for (let frameNumber = 1; frameNumber <= 10; frameNumber++) {
    for (let tryNumber = 1; tryNumber <= 2; tryNumber++) {
      const isLastFrame = frameNumber === 10;
      const frameScore = generateRandomScore(frameNumber, tryNumber);
      totalScore += frameScore;
      totalScore += frameScore;
    }
  }

  return totalScore;
}
