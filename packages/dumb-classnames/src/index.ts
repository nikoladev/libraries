module.exports = function dumbClassNames (classNames:Array<string | boolean> = []): string {
  if (!Array.isArray(classNames)) {
    classNames = [ classNames ]
  }

  return classNames
    .filter(function (className) {
      return typeof className === 'string' && className !== ''
    })
    .join(' ')
}
