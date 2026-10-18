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
  readonly mostFrequentWords: { word: string; count: number }[]

  /**
   * Creates a new SpeechReport.
   *
   * @param stats The statistics of the analyzed speech.
   */
  constructor(stats: SpeechStatistics) {
    this.wordCount = stats.wordCount
    this.characterCount = stats.characterCount
    this.sentenceCount = stats.sentenceCount
    this.speakingSeconds = stats.speakingSeconds
    this.averageWordLength = stats.averageWordLength
    this.averageSentenceLength = stats.averageSentenceLength
    this.mostFrequentWords = stats.mostFrequentWords
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
