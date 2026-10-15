/**
 * The report-panel web component module.
 *
 * @author Robin Helander <rehswe@gmail.com>
 * @version 1.0.0
 */

import css from './report-panel.css?inline'
import html from './report-panel.html?raw'

const sheet = new CSSStyleSheet()
sheet.replaceSync(css)

const template = document.createElement('template')
template.innerHTML = html

customElements.define(
  'report-panel',
  /**
   * Represents a report panel.
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
