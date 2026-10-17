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

/**
 * Represents a teleprompter view.
 */
export class TeleprompterView extends HTMLElement {
  /**
   * ...
   */
  #textArea: HTMLElement
  /**
   * Creates an instance of the current type.
   */
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.adoptedStyleSheets = [sheet]
    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#textArea = shadowRoot.querySelector('#speech') as HTMLElement 
  }

  /**
   * Called after the element is inserted into the DOM.
   */
  connectedCallback() {}


    /**
   * Used to update the text in the editor from outside.
   */
  set text(text: string) {
    this.#textArea.textContent = text
  }
}

customElements.define('teleprompter-view', TeleprompterView)
