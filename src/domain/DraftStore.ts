/**
 * ...
 */
export class DraftStore {
  readonly #storageKey = 'podium-draft'
  readonly #storage: Storage

  /**
   * ...
   *
   * @param storage - For example localStorage.
   */
  constructor(storage: Storage) {
    this.#storage = storage
  }

  /**
   * ...
   *
   * @param draft - ...
   * @returns - ...
   */
  save(draft: string): boolean {
    try {
      this.#storage.setItem(this.#storageKey, draft)
      return true
    } catch {
      return false
    }
  }

  /**
   * ...
   *
   * @returns ...
   */
  load(): string {
    try {
      return this.#storage.getItem(this.#storageKey) ?? ''
    } catch {
      return ''
    }
  }
}
