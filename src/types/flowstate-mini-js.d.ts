// Types for the parts of flowstate-mini-js that Podium uses, since the package has none.
declare module 'flowstate-mini-js' {
  export class StateMachine {
    constructor(initialStateName: string)
    defineState(name: string): this
    defineTransition(move: { from: string; to: string; on: string; guard?: () => boolean }): this
    canSend(eventName: string): boolean
    send(eventName: string): void
  }
}
