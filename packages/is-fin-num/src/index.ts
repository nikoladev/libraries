module.exports = function isFinNum (value: any): boolean {
  return typeof value === 'number' && isFinite(value)
}
