/**
 * The teleprompter-view web component module.
 *
 * @author Robin Helander <rehswe@gmail.com>
 * @version 1.0.0
 */

import css from './teleprompter-view.css?inline'
import html from './teleprompter-view.html?raw'
import { TeleprompterState, type TeleprompterEvent } from '../../domain/TeleprompterState'

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
  #teleprompter: HTMLElement
  #teleprompterState = new TeleprompterState();
  #buttons: HTMLButtonElement[]

  #speakingSeconds = 0
  /**
   * Creates an instance of the current type.
   */
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.adoptedStyleSheets = [sheet]
    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#textArea = shadowRoot.querySelector('#speech') as HTMLElement
    this.#teleprompter = shadowRoot.querySelector('#teleprompter') as HTMLElement
     this.#buttons = [...shadowRoot.querySelectorAll('button[data-event]')] as HTMLButtonElement[]
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

  set speakingSeconds(speakingSeconds: number) {
    this.#speakingSeconds = speakingSeconds
  }

  open(): void {
    this.#teleprompter.hidden = false
  }

    #send(event: TeleprompterEvent): void {
    if (!this.#teleprompterState.canSend(event)) {
      return
    }

  }

  #refreshButtons(): void {
    for (const button of this.#buttons) {
      button.disabled = !this.#teleprompterState.canSend(button.dataset.event as TeleprompterEvent)
    }
  }
}

customElements.define('teleprompter-view', TeleprompterView)
