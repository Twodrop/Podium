/**
 * The speech-editor web component module.
 *
 * @author Robin Helander <rehswe@gmail.com>
 * @version 1.0.0
 */

import css from './speech-editor.css?inline'
import html from './speech-editor.html?raw'
import { SpeakingPace } from '../../domain/SpeakingPace'

const DEFAULT_WORDS_PER_MINUTE = 130

const sheet = new CSSStyleSheet()
sheet.replaceSync(css)

const template = document.createElement('template')
template.innerHTML = html

/**
 * Represents the speech editor.
 */
export class SpeechEditor extends HTMLElement {
  #pace = new SpeakingPace(DEFAULT_WORDS_PER_MINUTE)
  #textarea: HTMLTextAreaElement
  #paceInput: HTMLInputElement
  #paceError: HTMLElement

  /**
   * Creates an instance of the current type.
   */
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.adoptedStyleSheets = [sheet]
    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#textarea = shadowRoot.querySelector('#speech') as HTMLTextAreaElement
    this.#paceInput = shadowRoot.querySelector('#pace') as HTMLInputElement
    this.#paceError = shadowRoot.querySelector('#pace-error') as HTMLElement
    this.#paceInput.value = String(this.#pace.wordsPerMinute)

    this.#textarea.addEventListener('input', () => this.#dispatchSpeechChange())
    this.#paceInput.addEventListener('change', () => {
      this.#setPace(this.#paceInput.valueAsNumber)
    })
    shadowRoot.querySelector('#pace-presets')?.addEventListener('click', (event) => {
      const button = (event.target as HTMLElement).closest('button')
      if (button) {
        this.#setPace(Number(button.value))
      }
    })
  }

  /**
   * Changes the pace, or shows an error and keeps the previous pace.
   *
   * @param wordsPerMinute - Between 50 and 300.
   */
  #setPace(wordsPerMinute: number) {
    try {
      this.#pace = new SpeakingPace(wordsPerMinute)
    } catch (error) {
      if (!(error instanceof RangeError)) {
        throw error
      }
      this.#paceError.textContent = `${error.message} Keeping ${this.#pace.wordsPerMinute}.`
      return
    }
    this.#paceError.textContent = ''
    this.#paceInput.value = String(this.#pace.wordsPerMinute)
    this.#dispatchSpeechChange()
  }

  /**
   * Used to update the text in the editor from outside.
   */
  set speech(text: string) {
    this.#textarea.value = text
    this.#dispatchSpeechChange()
  }

  /**
   * Tells listeners about the current text and pace.
   */
  #dispatchSpeechChange() {
    this.dispatchEvent(
      new CustomEvent('speech-change', {
        detail: { text: this.#textarea.value, pace: this.#pace },
        bubbles: true,
      })
    )
  }

  /**
   * Called after the element is inserted into the DOM.
   */
  connectedCallback() {}
}

customElements.define('speech-editor', SpeechEditor)
