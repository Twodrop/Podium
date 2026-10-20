import { StateMachine } from 'flowstate-mini-js'

export type TeleprompterEvent = 'start' | 'countdownEnded' | 'pause' | 'resume' | 'speechEnded' | 'restart' | 'exit'

/**
 * Keeps track of what the teleprompter is doing,
 * and which events are allowed right now.
 */
export class TeleprompterState {
  /**
   * Checks whether there is a speech to read.
   *
   * @returns True if the speech has at least one word.
   */
  readonly #hasSpeech = () => this.#wordCount > 0

  readonly #machine = new StateMachine('idle')

  #wordCount = 0

  /**
   * Sets up the states and the transitions between them.
   * Starts in idle.
   */
  constructor() {
    this.#machine
      .defineState('idle')
      .defineState('countingDown')
      .defineState('playing')
      .defineState('paused')
      .defineState('finished')
      .defineTransition({ from: 'idle', to: 'countingDown', on: 'start', guard: this.#hasSpeech })
      .defineTransition({ from: 'countingDown', to: 'playing', on: 'countdownEnded' })
      .defineTransition({ from: 'playing', to: 'paused', on: 'pause' })
      .defineTransition({ from: 'paused', to: 'playing', on: 'resume' })
      .defineTransition({ from: 'playing', to: 'finished', on: 'speechEnded' })

    for (const from of ['playing', 'paused', 'finished']) {
      this.#machine.defineTransition({ from, to: 'countingDown', on: 'restart' })
    }
    for (const from of ['idle', 'countingDown', 'playing', 'paused', 'finished']) {
      this.#machine.defineTransition({ from, to: 'idle', on: 'exit' })
    }
  }

  /**
   * The number of words in the speech. Start is only allowed when it is above 0.
   */
  set wordCount(wordCount: number) {
    this.#wordCount = wordCount
  }

  /**
   * Checks whether the event is allowed in the current state.
   *
   * @param event The event to check.
   * @returns True if the event can be sent.
   */
  canSend(event: TeleprompterEvent) {
    return this.#machine.canSend(event)
  }

  /**
   * Sends the event to move to the next state.
   *
   * @param event The event to send.
   */
  send(event: TeleprompterEvent) {
    this.#machine.send(event)
  }
}
