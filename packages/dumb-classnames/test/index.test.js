const dumbClassNames = require('../src/index.js')

describe('dumbClassNames', () => {
  test('joins strings with spaces', () => {
    expect(dumbClassNames([
      'word',
      'palavra',
      'riječ',
    ])).toBe('word palavra riječ')
  })

  test('only processes strings', () => {
    expect(dumbClassNames([
      'moja',
      123,
      NaN,
      0,
      {},
      'mbili',
      [],
      true,
      false,
      'tatu',
      undefined,
      null,
    ])).toBe('moja mbili tatu')
  })

  test('filters out empty strings', () => {
    expect(dumbClassNames([
      '',
      'PREsent',
      '',
    ])).toBe('PREsent')
  })

  test('allows for conditional inputs', () => {
    expect(dumbClassNames([
      true && 'in-output',
      false && 'not-in-output',
      false || 'also-in-output',
      true || 'also-not-in-output',
    ])).toBe('in-output also-in-output')
  })

  test('returns empty string if no input is provided', () => {
    expect(dumbClassNames()).toBe('')
  })

  test('casts non-array input to an array and then processes it normally', () => {
    expect(dumbClassNames(1)).toBe('')
    expect(dumbClassNames(true)).toBe('')
    expect(dumbClassNames({})).toBe('')
    expect(dumbClassNames('123')).toBe('123')
    expect(dumbClassNames(null)).toBe('')
    expect(dumbClassNames(undefined)).toBe('')
  })

  test('only processes the first parameter', () => {
    expect(dumbClassNames([
      'satu',
      'dua',
    ], [
      'tiga',
      'empat ',
    ])).toBe('satu dua')
  })
})
