// The package does not provide TypeScript declarations.
// @ts-ignore
import { StateMachine } from 'flowstate-mini-js'
export type TeleprompterEvent = 'start' | 'countdownEnded' | 'pause' | 'resume' | 'speechEnded' | 'restart' | 'exit'

/**
 *
 */
export class TeleprompterState {
  readonly #machine = new StateMachine('idle')

  /**
   *
   */
  constructor() {
    this.#machine
      .defineState('idle')
      .defineState('countingDown')
      .defineState('playing')
      .defineState('paused')
      .defineState('finished')
      .defineTransition({ from: 'idle', to: 'countingDown', on: 'start' })
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
   * TODO:
   *
   * @param event
   */
  canSend(event: TeleprompterEvent) {
    return this.#machine.canSend(event)
  }

  /**
   * TODO:
   *
   * @param event
   */
  send(event: TeleprompterEvent) {
    this.#machine.send(event)
  }
}
