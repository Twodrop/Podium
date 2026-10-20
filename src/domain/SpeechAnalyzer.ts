import { TextCounter, TextStatistics } from 'glyphalyze'
import type { SpeakingPace } from './SpeakingPace'
import { SpeechReport } from './SpeechReport'
const FREQUENT_WORDS_COUNT = 10
const FREQUENT_WORDS_EXCLUDE = `
  a an the and or but so if of to in on at by for with from as about into than that this these
  those it its is are was were be been am do does did have has had will would can could i me my
  we us our you your he him his she her they them their not no there what which who when all
  just
`
  .trim()
  .split(/\s+/)

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
    const counter = new TextCounter(text)
    const statistics = new TextStatistics(text)

    return new SpeechReport({
      wordCount: counter.countWords(),
      characterCount: counter.countCharacters(),
      sentenceCount: counter.countSentences(),
      speakingSeconds: statistics.readingTimeInSeconds(pace.wordsPerMinute),
      averageWordLength: statistics.avgWordLength(),
      averageSentenceLength: statistics.avgSentenceLength(),
      mostFrequentWords: counter.mostFrequentWords(FREQUENT_WORDS_COUNT, FREQUENT_WORDS_EXCLUDE),
    })
  }
}
