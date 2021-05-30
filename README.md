# complete-randomer

[![npm version](https://badge.fury.io/js/complete-randomer.svg)](https://badge.fury.io/js/complete-randomer) [![Testing](https://github.com/MilosPaunovic/complete-randomer/actions/workflows/testing.yml/badge.svg)](https://github.com/MilosPaunovic/complete-randomer/actions/workflows/testing.yml) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://github.com/MilosPaunovic/complete-randomer/blob/develop/LICENSE)

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
// Integer between min & max parameters, inclusively
randomer.NUMBER.INTEGER(min, max); // Defaults to 1, 100
```

#### String

```js
// Parameter number of characters, could be used as a random password generator
randomer.STRING.GIBBERISH(length); // Defaults to 10

// Array of full name strings between 1 and 1000 results
randomer.STRING.NAMES(howMany); // Defaults to 10
```

#### Boolean

```js
// Random Boolean value
randomer.BOOLEAN.IS();

// Random YES or NO string
randomer.BOOLEAN.YES_NO();
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

#### Quotes

```js
// Random quote object, { text: '...', author: '...' }
randomer.QUOTES.SINGLE();

// Array of quote objects between 1 and 1000 results
randomer.QUOTES.LIST(howMany); // Defaults to 10
```

#### Emails

```js
// Random email address with 'host' part customizable
randomer.EMAIL.SINGLE(host); // Defaults to randomer

// Array of email addresses between 1 and 1000 results
randomer.EMAIL.LIST(howMany); // Defaults to 10
```

#### Users

```js
// Random user object, { firstName: '...', lastName: '...', email: '...', password: '...', dob: '...' }
randomer.USER.SINGLE();

// Array of user objects between 1 and 1000 results
randomer.USER.LIST(howMany); // Defaults to 10
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://raw.githubusercontent.com/MilosPaunovic/complete-randomer/main/LICENSE/)
