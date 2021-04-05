# Is finite number

Widely supported version of `Number.isFinite`. Checks whether a value is a finite number.

Also check out [`is-non-nan-num`][is-non-nan-num], which is similar but does accept `Infinity` and `-Infinity`.

## Installation

```
<pnpm|npm|yarn> add is-fin-num
```

## Usage

```js
import isFinNum from 'is-fin-num'

console.log(isFinNum(0))        // => true 🤙
console.log(isFinNum(-123))     // => true 🤙

console.log(isFinNum(Infinity)) // => false ❌
console.log(isFinNum(NaN))      // => false ❌
console.log(isFinNum(0/0))      // => false ❌
console.log(isFinNum('1'))      // => false ❌
console.log(isFinNum([]))       // => false ❌
```

See `test/index.test.js` for more use cases.

## Browser support

`isFinNum` relies on `isFinite` (instead of `Number.isFinite`) so it should basically work everywhere.

| Browser                | Minimum version |
| ---------------------- | --------------- |
| Firefox                | >=1             |
| Safari                 | >=1             |
| Edge                   | >=12            |
| Chrome                 | >=1             |
| Internet Explorer (IE) | >=4             |

[is-non-nan-num]: ../is-non-nan-num
