/**
 * The values needed to create a SpeechReport.
 */
export type SpeechStatistics = {
  wordCount: number
  characterCount: number
  sentenceCount: number
  speakingSeconds: number
  averageWordLength: number
  averageSentenceLength: number
  mostFrequentWords: { word: string; count: number }[]
}

/**
 * The result of analyzing a speech.
 */
export class SpeechReport {
  readonly wordCount: number
  readonly characterCount: number
  readonly sentenceCount: number
  readonly speakingSeconds: number
  readonly averageWordLength: number
  readonly averageSentenceLength: number
  readonly mostFrequentWords: readonly { word: string; count: number }[]

  /**
   * Creates a new SpeechReport.
   *
   * @param statistics The statistics of the analyzed speech.
   */
  constructor(statistics: SpeechStatistics) {
    this.wordCount = statistics.wordCount
    this.characterCount = statistics.characterCount
    this.sentenceCount = statistics.sentenceCount
    this.speakingSeconds = statistics.speakingSeconds
    this.averageWordLength = statistics.averageWordLength
    this.averageSentenceLength = statistics.averageSentenceLength
    this.mostFrequentWords = statistics.mostFrequentWords
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
