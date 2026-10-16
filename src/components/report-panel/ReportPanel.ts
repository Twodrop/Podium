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
  #wordCount: HTMLElement
  #speakingTime: HTMLElement

  /**
   * Creates an instance of the current type.
   */
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.adoptedStyleSheets = [sheet]
    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#wordCount = shadowRoot.querySelector('#word-count') as HTMLElement
    this.#speakingTime = shadowRoot.querySelector('#speaking-time') as HTMLElement
  }

  /**
   * Shows the given report.
   *
   * @param report - The report to show.
   */
  showReport(report: SpeechReport) {
    this.#wordCount.textContent = String(report.wordCount)
    this.#speakingTime.textContent = report.formattedSpeakingTime
  }

  /**
   * Called after the element is inserted into the DOM.
   */
  connectedCallback() {}
}

customElements.define('report-panel', ReportPanel)
