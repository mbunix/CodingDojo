import { enterFrameDetails } from "./generateRandomScore";

export class BowlingGame {
  private rolls: number[];

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
        enterFrameDetails(frame, attempt).then((score) => {
            this.rolls.push(score);
            if (score === 10) {
                return; // Move to the next frame if it's a strike
            }
            const remainingPins = 10 - score;
        });
    });
    this.rolls = [];
  }

  public roll(pins: number): void {
    this.rolls.push(pins);
  }
  private isStrike(rollIndex: number): boolean {
    return this.rolls[rollIndex] === 10;
  }

  private isSpare(rollIndex: number): boolean {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }

  private strikeBonus(rollIndex: number): number {
    return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  private spareBonus(rollIndex: number): number {
    return this.rolls[rollIndex + 2];
  }

  private sumOfBallsInFrame(rollIndex: number): number {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }
  public score(): number {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(rollIndex)) {
        totalScore += 10 + this.strikeBonus(rollIndex);
        rollIndex++;
      } else if (this.isSpare(rollIndex)) {
        totalScore += 10 + this.spareBonus(rollIndex);
        rollIndex += 2;
      } else {
        totalScore += this.sumOfBallsInFrame(rollIndex);
        rollIndex += 2;
      }
    }

    return totalScore;
  }
}
