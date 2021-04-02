const isNonNanNum = require('../src/index.ts')

describe('isNonNanNum', () => {
  test('accepts non-NaN numbers', () => {
    expect(isNonNanNum(-Infinity)).toBe(true)
    expect(isNonNanNum(-123.456)).toBe(true)
    expect(isNonNanNum(-0)).toBe(true)
    expect(isNonNanNum(0)).toBe(true)
    expect(isNonNanNum(Math.PI)).toBe(true)
    expect(isNonNanNum(42)).toBe(true)
    expect(isNonNanNum(Infinity)).toBe(true)
  })

  test('rejects NaN numbers', () => {
    expect(isNonNanNum(NaN)).toBe(false)
    expect(isNonNanNum(0/0)).toBe(false)
  })

  test('rejects non-numbers', () => {
    expect(isNonNanNum('1')).toBe(false)
    expect(isNonNanNum('')).toBe(false)
    expect(isNonNanNum([])).toBe(false)
    expect(isNonNanNum({})).toBe(false)
    expect(isNonNanNum(true)).toBe(false)
    expect(isNonNanNum(false)).toBe(false)
    expect(isNonNanNum(null)).toBe(false)
    expect(isNonNanNum(undefined)).toBe(false)
    expect(isNonNanNum(new Map())).toBe(false)
    expect(isNonNanNum(new Set())).toBe(false)
    expect(isNonNanNum(function () {})).toBe(false)
  })
})
