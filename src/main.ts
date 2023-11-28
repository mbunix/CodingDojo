import { enterFrameDetails } from "./generateRandomScore";
import { BowlingGame } from "./bowlingGame";
 export async function playGame() {
  const bowlingGame = new BowlingGame();

  for (let frameNumber = 1; frameNumber <= 10; frameNumber++) {
    const firstTryScore = await enterFrameDetails(frameNumber, 1);
    bowlingGame.roll(firstTryScore);

    if (firstTryScore === 10) {
      continue; // Move to the next frame if it's a strike
    }

    const remainingPins = 10 - firstTryScore;
    const secondTryScore = await enterFrameDetails(frameNumber, 2, remainingPins);
    bowlingGame.roll(secondTryScore);
  }

  const totalScore = bowlingGame.score();
  console.log(`Total score: ${totalScore}`);
  console.log("Press any key to continue...");
}

playGame();