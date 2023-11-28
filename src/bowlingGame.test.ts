import { BowlingGame } from './bowlingGame';

describe('BowlingGame', () => {
  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it('should score 0 for a gutter game', () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  it('should score 20 for all ones', () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  it('should score 16 for a spare followed by a 3', () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toBe(16);
  });

  it('should score 24 for a strike followed by a 3 and a 4', () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toBe(24);
  });

  it('should score 300 for a perfect game', () => {
    rollMany(12, 10);
    expect(game.score()).toBe(300);
  });

  function rollMany(n: number, pins: number) {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }
});