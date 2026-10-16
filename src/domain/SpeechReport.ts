export class SpeechReport {
  readonly wordCount: number
  readonly speakingSeconds: number

  constructor(wordCount: number, speakingSeconds: number) {
    this.wordCount = wordCount
    this.speakingSeconds = speakingSeconds
  }
}