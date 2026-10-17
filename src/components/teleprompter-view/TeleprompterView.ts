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
  #teleprompterState = new TeleprompterState()
  #menuButtons: HTMLButtonElement[]
  #openTeleprompterButton: HTMLButtonElement
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
    this.#menuButtons = [...shadowRoot.querySelectorAll('button[data-event]')] as HTMLButtonElement[]
    this.#openTeleprompterButton = shadowRoot.querySelector('#open') as HTMLButtonElement

    for (const button of this.#menuButtons) {
      button.addEventListener('click', () => this.#send(button.dataset.event as TeleprompterEvent))
    }

    this.#openTeleprompterButton.addEventListener('click', () => this.#open())
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
    this.#refreshButtons()
  }

  set speakingSeconds(speakingSeconds: number) {
    this.#speakingSeconds = speakingSeconds
  }

  #open(): void {
    this.#teleprompter.hidden = false
    this.#openTeleprompterButton.hidden = true
    this.#refreshButtons()
  }

  #close(): void {
    this.#teleprompter.hidden = true
    this.#openTeleprompterButton.hidden = false
    this.#refreshButtons()
  }

  #show(event: TeleprompterEvent): void {
    switch (event) {
      case 'start':
      case 'restart':
        console.log('this.#startCountdown()')
        break
      case 'countdownEnded':
      case 'resume':
        console.log('this.#animation?.play()')
        break
      case 'pause':
        console.log('this.#animation?.pause()')
        break
      case 'exit':
        console.log(this.#close())
        break
    }
  }

  #send(event: TeleprompterEvent): void {
    if (!this.#teleprompterState.canSend(event)) {
      return
    }
    this.#teleprompterState.send(event)
    this.#show(event)
    this.#refreshButtons()
  }

  #refreshButtons(): void {
    for (const button of this.#menuButtons) {
      button.disabled = !this.#teleprompterState.canSend(button.dataset.event as TeleprompterEvent)
    }
  }
}

customElements.define('teleprompter-view', TeleprompterView)
