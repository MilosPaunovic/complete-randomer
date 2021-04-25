# complete-randomer

[![Testing](https://github.com/MilosPaunovic/complete-randomer/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/MilosPaunovic/complete-randomer/actions/workflows/unit-tests.yml) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://github.com/MilosPaunovic/complete-randomer/blob/develop/LICENSE)

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

```js
// Random integer between min & max, inclusively
randomer.INTEGER(min, max);

// Random string
randomer.STRING(length);

// Random boolean
randomer.BOOLEAN();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://raw.githubusercontent.com/MilosPaunovic/complete-randomer/main/LICENSE/)
