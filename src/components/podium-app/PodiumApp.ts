/**
 * The podium-app web component module.
 *
 * @author Robin Helander <rehswe@gmail.com>
 * @version 1.0.0
 */

import css from './podium-app.css?inline'
import html from './podium-app.html?raw'
import { SpeechAnalyzer } from '../../domain/SpeechAnalyzer'
import { DraftStore } from '../../domain/DraftStore'
import type { SpeakingPace } from '../../domain/SpeakingPace'
import type { ReportPanel } from '../report-panel/ReportPanel'
import type { SpeechEditor } from '../speech-editor/SpeechEditor'
import type { TeleprompterView } from '../teleprompter-view/TeleprompterView'

const sheet = new CSSStyleSheet()
sheet.replaceSync(css)

const template = document.createElement('template')
template.innerHTML = html

const STORAGE = localStorage

/**
 * Represents the podium app.
 */
export class PodiumApp extends HTMLElement {
  #analyzer = new SpeechAnalyzer()
  #speechEditor: SpeechEditor
  #draftStore = new DraftStore(STORAGE)
  /**
   * Creates an instance of the current type.
   */
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.adoptedStyleSheets = [sheet]
    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#speechEditor = shadowRoot.querySelector('speech-editor') as SpeechEditor

    const reportPanel = shadowRoot.querySelector('report-panel') as ReportPanel

    const teleprompterView = shadowRoot.querySelector('teleprompter-view') as TeleprompterView

    shadowRoot.addEventListener('speech-change', (event) => {
      const { text, pace } = (event as CustomEvent<{ text: string; pace: SpeakingPace }>).detail

      const report = this.#analyzer.analyze(text, pace)
      reportPanel.showReport(report)

      if (!this.#draftStore.save(text)) {
        console.error('Could not save speech to storage')
      }

      teleprompterView.text = text
      teleprompterView.speakingSeconds = report.speakingSeconds
      teleprompterView.wordCount = report.wordCount
      
    })
  }

  /**
   * Called after the element is inserted into the DOM.
   */
  connectedCallback() {
    this.#speechEditor.speech = this.#draftStore.load()
  }
}

customElements.define('podium-app', PodiumApp)
