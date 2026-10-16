import { TextCounter, TextStatistics } from 'glyphalyze'
import type { SpeakingPace } from './SpeakingPace'
import { SpeechReport } from './SpeechReport'

/**
 * Turns the text of a speech into a SpeechReport.
 */
export class SpeechAnalyzer {
  analyze(text: string, pace: SpeakingPace): SpeechReport {
    const wordCount = new TextCounter(text).countWords()
    const speakingSeconds = new TextStatistics(text).readingTime(pace.wordsPerMinute)

    return new SpeechReport(wordCount, speakingSeconds)
  }
}
