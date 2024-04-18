/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  // Declare a property 'scores' for keeping scores in array
  scores: number[];
  // Constructor function taking number array as input
  constructor(scores: number[]) {
    this.scores = scores;
  }

  // Define getter method 'latest' which returns number
  get latest(): number {
    // Return last element of 'scores' array
    return this.scores[this.scores.length - 1];
  }

  get personalBest(): number {
    // Return max value from 'scores' array
    return Math.max(...this.scores);
  }

  get personalTopThree(): number[] {
    // Copy of array before sorting
    const sortedScores = [...this.scores];
    // Sort the copy of an array in descending order and return first three elements
    return sortedScores.sort((a: number, b: number) => b - a).slice(0, 3);
  }
}

export { HighScores };
