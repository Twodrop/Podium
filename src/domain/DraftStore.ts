/**
 * Saves and loads the speech draft, so it is kept between visits.
 */
export class DraftStore {
  readonly #storageKey = 'podium-draft'
  readonly #storage: Storage

  /**
   * Creates a store that keeps the draft in the given storage.
   *
   * @param storage - For example localStorage.
   */
  constructor(storage: Storage) {
    this.#storage = storage
  }

  /**
   * Saves the draft, replacing the one saved before.
   *
   * @param draft - The speech text to save.
   * @returns True if the draft was saved, false if the storage failed.
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
   * Loads the saved draft.
   *
   * @returns The saved draft, or an empty string if there is none or the storage failed.
   */
  load(): string {
    try {
      return this.#storage.getItem(this.#storageKey) ?? ''
    } catch {
      return ''
    }
  }
}
