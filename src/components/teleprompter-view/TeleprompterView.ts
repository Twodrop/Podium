/**
 * The teleprompter-view web component module.
 *
 * @author Robin Helander <rehswe@gmail.com>
 * @version 1.0.0
 */

import css from './teleprompter-view.css?inline'
import html from './teleprompter-view.html?raw'

const sheet = new CSSStyleSheet()
sheet.replaceSync(css)

const template = document.createElement('template')
template.innerHTML = html

customElements.define(
  'teleprompter-view',
  /**
   * Represents a teleprompter view.
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
