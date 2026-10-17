import { TextCounter, TextStatistics } from 'glyphalyze'
import type { SpeakingPace } from './SpeakingPace'
import { SpeechReport } from './SpeechReport'

/**
 * Turns the text of a speech into a SpeechReport.
 */
export class SpeechAnalyzer {
  /**
   * Takes a text (speech) and pace, and returns
   * a report.
   *
   * @param text The speech.
   * @param pace A pace with validated range.
   * @returns A report of the analysis.
   */
  analyze(text: string, pace: SpeakingPace): SpeechReport {
    const wordCount = new TextCounter(text).countWords()
    const speakingSeconds = new TextStatistics(text).readingTimeInSeconds(pace.wordsPerMinute)

    return new SpeechReport(wordCount, speakingSeconds)
  }
}
