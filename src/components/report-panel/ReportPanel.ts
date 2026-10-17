/**
 * The report-panel web component module.
 *
 * @author Robin Helander <rehswe@gmail.com>
 * @version 1.0.0
 */

import css from './report-panel.css?inline'
import html from './report-panel.html?raw'
import type { SpeechReport } from '../../domain/SpeechReport'

const sheet = new CSSStyleSheet()
sheet.replaceSync(css)

const template = document.createElement('template')
template.innerHTML = html

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
    this.#averageWordLength.textContent = String(report.averageWordLength)
    this.#averageSentenceLength.textContent = String(report.averageSentenceLength)
  }

  /**
   * Called after the element is inserted into the DOM.
   */
  connectedCallback() {}
}

customElements.define('report-panel', ReportPanel)
