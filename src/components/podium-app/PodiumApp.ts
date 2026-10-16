/**
 * The podium-app web component module.
 *
 * @author Robin Helander <rehswe@gmail.com>
 * @version 1.0.0
 */

import css from './podium-app.css?inline'
import html from './podium-app.html?raw'
import { SpeechAnalyzer } from '../../domain/SpeechAnalyzer'
import type { SpeakingPace } from '../../domain/SpeakingPace'
import type { ReportPanel } from '../report-panel/ReportPanel'

const sheet = new CSSStyleSheet()
sheet.replaceSync(css)

const template = document.createElement('template')
template.innerHTML = html

/**
 * Represents the podium app.
 */
export class PodiumApp extends HTMLElement {
  #analyzer = new SpeechAnalyzer()

  /**
   * Creates an instance of the current type.
   */
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.adoptedStyleSheets = [sheet]
    shadowRoot.appendChild(template.content.cloneNode(true))

    const reportPanel = shadowRoot.querySelector('report-panel') as ReportPanel

    shadowRoot.addEventListener('speech-change', (event) => {
      const { text, pace } = (event as CustomEvent<{ text: string; pace: SpeakingPace }>).detail
      reportPanel.report = this.#analyzer.analyze(text, pace)
    })
  }

  /**
   * Called after the element is inserted into the DOM.
   */
  connectedCallback() {}
}

customElements.define('podium-app', PodiumApp)
