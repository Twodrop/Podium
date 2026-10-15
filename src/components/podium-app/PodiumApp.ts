/**
 * The podium-app web component module.
 *
 * @author Robin Helander <rehswe@gmail.com>
 * @version 1.0.0
 */

import css from './podium-app.css?inline'
import html from './podium-app.html?raw'

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

      this.addEventListener('speech-change', (event) => {
        const { text } = (event as CustomEvent<{ text: string }>).detail
        console.log(text)
      })
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback() {}
  }
)
