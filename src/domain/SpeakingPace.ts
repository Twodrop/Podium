/**
 * Class used to validate the words per minute.
 *
 */
export class SpeakingPace {
  readonly #slowestWordsPerMinute = 50
  readonly #fastestWordsPerMinute = 300
  readonly #wordsPerMinute: number

  /**
   * Set the value you want in the constructor.
   * This class has no setter.
   *
   * @param wordsPerMinute - Between 50 and 300.
   * @throws {RangeError} If wordsPerMinute is not a number from 50 to 300.
   */
  constructor(wordsPerMinute: number) {
    this.#validate(wordsPerMinute)
    this.#wordsPerMinute = wordsPerMinute
  }

  /**
   * The pace in words per minute.
   *
   * @returns wordsPerMinute
   */
  get wordsPerMinute(): number {
    return this.#wordsPerMinute
  }

  /**
   * Helper function to validate words per minute,
   * will throw if not within range, or isnt finite.
   *
   * @param wordsPerMinute Between 50 and 300.
   */
  #validate(wordsPerMinute: number) {
    if (
      !Number.isFinite(wordsPerMinute) ||
      wordsPerMinute < this.#slowestWordsPerMinute ||
      wordsPerMinute > this.#fastestWordsPerMinute
    ) {
      throw new RangeError(
        `Must be a finite number between ${this.#slowestWordsPerMinute} and ${this.#fastestWordsPerMinute} words per minute.`
      )
    }
  }
}
