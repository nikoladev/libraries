# Is non-NaN number

Checks whether a value is a number and that it's not `NaN`.

## Installation

```
<pnpm|npm|yarn> add is-non-nan-num
```

## Usage

```js
import isNonNanNum from 'is-non-nan-num'

console.log(isNonNanNum(0))        // => true 🤙
console.log(isNonNanNum(Infinity)) // => true 🤙

console.log(isNonNanNum(NaN))      // => false ❌
console.log(isNonNanNum(0/0))      // => false ❌
console.log(isNonNanNum('1'))      // => false ❌
console.log(isNonNanNum([]))       // => false ❌
```

See `test/index.test.js` for more use cases.

## Browser support

`isNonNanNum` relies on `isNaN` (instead of `Number.isNaN`) so it should basically work everywhere.

| Browser                | Minimum version |
| ---------------------- | --------------- |
| Firefox                | >=1             |
| Safari                 | >=1             |
| Edge                   | >=12            |
| Chrome                 | >=1             |
| Internet Explorer (IE) | >=3             |
