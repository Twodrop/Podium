/**
 *
 */
export class SpeechReport {
  readonly wordCount: number
  readonly speakingSeconds: number

  /**
   * Creates a new SpeechReport.
   *
   * @param wordCount word count
   * @param speakingSeconds speaking seconds
   */
  constructor(wordCount: number, speakingSeconds: number) {
    this.wordCount = wordCount
    this.speakingSeconds = speakingSeconds
  }

  /**
   * Formats the speaking seconds to
   * minutes and seconds.
   *
   * @returns example: 11:09
   */
  get formattedSpeakingTime(): string {
    const totalSeconds = Math.round(this.speakingSeconds)
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
    const seconds = String(totalSeconds % 60).padStart(2, '0')

    return `${minutes}:${seconds}`
  }
}
