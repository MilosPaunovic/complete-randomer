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

#### Colors
```js
// HEX, #41D831
randomer.COLOR.HEX();

// RGB, rgb(180 206 38)
randomer.COLOR.RGB();

// RGBA, rgb(22 26 189 / 60%)
randomer.COLOR.RGBA();

// HSL, hsl(346 78% 49%)
randomer.COLOR.HSL();

// HSLA, hsl(134 75% 74% / 26%)
randomer.COLOR.HSLA();
```

#### Date

```js
// Random date between 01/01/1970 and 31/12/2030
randomer.DATE.FULL();

// Random date between 01/01/1970 and current date
randomer.DATE.PAST();

// Random date between current date and 31/12/2030
randomer.DATE.FUTURE();
```

#### Quote

```js
// Random quote Object with 'quoteText' and 'author'
randomer.QUOTES.QUOTE();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://raw.githubusercontent.com/MilosPaunovic/complete-randomer/main/LICENSE/)
