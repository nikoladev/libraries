module.exports = function isNonNanNum (value: any): boolean {
  return typeof value === 'number' && !isNaN(value)
}
