# complete-randomer

[![Testing](https://github.com/MilosPaunovic/complete-randomer/actions/workflows/testing.yml/badge.svg)](https://github.com/MilosPaunovic/complete-randomer/actions/workflows/testing.yml) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://github.com/MilosPaunovic/complete-randomer/blob/develop/LICENSE)

A simple NPM helper package for generating random values.

## Install

```bash
npm i complete-randomer
# or
yarn add complete-randomer
```

## Usage

```js
const randomer = require('complete-randomer');
```

## Methods

#### Number

```js
// Integer between min & max, inclusively
randomer.NUMBER.INTEGER(min, max);
```

#### String

```js
// Parameter number of characters as string
randomer.STRING.GIBBERISH(length);

// Array of strings as full names, default length is 1
randomer.STRING.NAMES(howMany);
```

#### Boolean

```js
// Random Boolean value
randomer.BOOLEAN.IS();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://raw.githubusercontent.com/MilosPaunovic/complete-randomer/main/LICENSE/)
