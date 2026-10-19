/**
 * The report-panel web component module.
 *
 * @author Robin Helander <rehswe@gmail.com>
 */

import css from './report-panel.css?inline'
import html from './report-panel.html?raw'
import type { SpeechReport } from '../../domain/SpeechReport'

const sheet = new CSSStyleSheet()
sheet.replaceSync(css)

const template = document.createElement('template')
template.innerHTML = html

const DECIMAL_PLACES = 2

/**
 * Represents a report panel.
 */
export class ReportPanel extends HTMLElement {
  #characterCount: HTMLElement
  #wordCount: HTMLElement
  #sentenceCount: HTMLElement
  #speakingTime: HTMLElement
  #averageWordLength: HTMLElement
  #averageSentenceLength: HTMLElement
  #mostFrequentWords: HTMLElement

  /**
   * Creates an instance of the current type.
   */
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.adoptedStyleSheets = [sheet]
    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#characterCount = shadowRoot.querySelector('#character-count') as HTMLElement
    this.#wordCount = shadowRoot.querySelector('#word-count') as HTMLElement
    this.#sentenceCount = shadowRoot.querySelector('#sentence-count') as HTMLElement
    this.#speakingTime = shadowRoot.querySelector('#speaking-time') as HTMLElement
    this.#averageWordLength = shadowRoot.querySelector('#average-word-length') as HTMLElement
    this.#averageSentenceLength = shadowRoot.querySelector('#average-sentence-length') as HTMLElement
    this.#mostFrequentWords = shadowRoot.querySelector('#most-frequent-words') as HTMLElement
  }

  /**
   * Shows the given report.
   *
   * @param report - The report to show.
   */
  showReport(report: SpeechReport) {
    this.#characterCount.textContent = String(report.characterCount)
    this.#wordCount.textContent = String(report.wordCount)
    this.#sentenceCount.textContent = String(report.sentenceCount)
    this.#speakingTime.textContent = report.formattedSpeakingTime
    this.#averageWordLength.textContent = report.averageWordLength.toFixed(DECIMAL_PLACES)
    this.#averageSentenceLength.textContent = report.averageSentenceLength.toFixed(DECIMAL_PLACES)
    this.#showMostFrequentWords(report.mostFrequentWords)
  }

  /**
   * Renders the most frequent words as list items.
   *
   * @param words - The words and their counts, most frequent first.
   */
  #showMostFrequentWords(words: readonly { word: string; count: number }[]) {
    const items = words.map(({ word, count }) => {
      const item = document.createElement('li')
      const countElement = document.createElement('span')
      countElement.className = 'count'
      countElement.textContent = String(count)
      item.append(word, countElement)
      return item
    })
    this.#mostFrequentWords.replaceChildren(...items)
  }
}

customElements.define('report-panel', ReportPanel)
