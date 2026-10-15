/**
 * The podium-app web component module.
 *
 * @author Robin Helander <rehswe@gmail.com>
 * @version 1.0.0
 */

import css from './podium-app.css?inline'
import html from './podium-app.html?raw'
import type { SpeakingPace } from '../../domain/SpeakingPace'

const sheet = new CSSStyleSheet()
sheet.replaceSync(css)

const template = document.createElement('template')
template.innerHTML = html

customElements.define(
  'podium-app',
  /**
   * Represents the podium app.
   */

  /**
   * ...
   */
  class extends HTMLElement {
    /**
     * ...
     */

    /**
     * Creates an instance of the current type.
     */
    constructor() {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      shadowRoot.adoptedStyleSheets = [sheet]
      shadowRoot.appendChild(template.content.cloneNode(true))

      shadowRoot.addEventListener('speech-change', (event) => {
        const { text, pace } = (event as CustomEvent<{ text: string; pace: SpeakingPace }>).detail
        console.log(text, pace.wordsPerMinute)
      })
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback() {}
  }
)
