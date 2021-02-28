# Dumb classnames

A simpler version of [classnames](https://github.com/JedWatson/classnames/) that only accepts arrays.

## Installation

```
<pnpm|npm|yarn> add dumb-classnames
```

## Usage

### Only accepts arrays

```js
import dumbClassNames from 'dumb-classnames'

console.log(dumbClassNames([
  'word',
  'palavra',
  'riječ',
])) // => "word palavra riječ"
```

### Has conditional input

```js
import dumbClassNames from 'dumb-classnames'

console.log(dumbClassNames([
  true && 'in-output',
  false && 'not-in-output',
])) // => "in-output"
```

### Only processes the first parameter

```js
import dumbClassNames from 'dumb-classnames'

console.log(dumbClassNames([
  'satu',
  'dua',
], [
  'tiga',
  'empat ',
]) // => "satu dua"
```

See `test/index.test.js` for more use cases.

## Browser support

The most modern functionality that is used is `Array.isArray`. So it should basically work everywhere.

| Browser                | Minimum version |
| ---------------------- | --------------- |
| Firefox                | >=4             |
| Safari                 | >=5             |
| Edge                   | >=12            |
| Chrome                 | >=5             |
| Internet Explorer (IE) | >=9             |
