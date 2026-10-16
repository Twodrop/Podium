export class SpeechReport {
  readonly wordCount: number
  readonly speakingSeconds: number

  constructor(wordCount: number, speakingSeconds: number) {
    this.wordCount = wordCount
    this.speakingSeconds = speakingSeconds
  }

  /**
   */
  get formattedSpeakingTime(): string {
    const totalSeconds = Math.round(this.speakingSeconds)
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
    const seconds = String(totalSeconds % 60).padStart(2, '0')

    return `${minutes}:${seconds}`
  }
}
