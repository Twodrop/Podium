import { describe, expect, it } from 'vitest'
import { SpeakingPace } from './SpeakingPace'

describe('SpeakingPace', () => {
  it('keeps a valid pace', () => {
    expect(new SpeakingPace(130).wordsPerMinute).toBe(130)
  })

  it('accepts the limits 50 and 300', () => {
    expect(() => new SpeakingPace(50)).not.toThrow()
    expect(() => new SpeakingPace(300)).not.toThrow()
  })

  it.each([0, 49, 301, -10, NaN, Infinity])('rejects %s', (wordsPerMinute) => {
    expect(() => new SpeakingPace(wordsPerMinute)).toThrow(RangeError)
  })
})
