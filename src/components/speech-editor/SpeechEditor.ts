/**
 * The speech-editor web component module.
 *
 * @author Robin Helander <rehswe@gmail.com>
 * @version 1.0.0
 */

import css from './speech-editor.css?inline'
import html from './speech-editor.html?raw'

const sheet = new CSSStyleSheet()
sheet.replaceSync(css)

const template = document.createElement('template')
template.innerHTML = html

customElements.define(
  'speech-editor',
  /**
   * Represents the speech editor.
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
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback() {}
  }
)
