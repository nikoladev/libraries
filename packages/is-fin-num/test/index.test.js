const isFinNum = require('../src/index.ts')

describe('isFinNum', () => {
  test('accepts non-NaN numbers', () => {
    expect(isFinNum(-123.456)).toBe(true)
    expect(isFinNum(-0)).toBe(true)
    expect(isFinNum(0)).toBe(true)
    expect(isFinNum(Math.PI)).toBe(true)
    expect(isFinNum(42)).toBe(true)
  })

  test('rejects NaN numbers', () => {
    expect(isFinNum(NaN)).toBe(false)
    expect(isFinNum(0/0)).toBe(false)
  })

  test('rejects Infinity', () => {
    expect(isFinNum(-Infinity)).toBe(false)
    expect(isFinNum(Infinity)).toBe(false)
  })

  test('rejects non-numbers', () => {
    expect(isFinNum('1')).toBe(false)
    expect(isFinNum('')).toBe(false)
    expect(isFinNum([])).toBe(false)
    expect(isFinNum({})).toBe(false)
    expect(isFinNum(true)).toBe(false)
    expect(isFinNum(false)).toBe(false)
    expect(isFinNum(null)).toBe(false)
    expect(isFinNum(undefined)).toBe(false)
    expect(isFinNum(new Map())).toBe(false)
    expect(isFinNum(new Set())).toBe(false)
    expect(isFinNum(function () {})).toBe(false)
  })
})
