# React Swedish personal identity number input

A higher order component for formatting values in input elements as Swedish personal identity numbers


[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]


## Install

```
$ npm install --save react-swedish-personal-identity-number-input
```


## Usage

```ts
import React from 'react';
import { createSwedishPersonalIdentityNumberInput } from 'react-swedish-personal-identity-number-input';

const YourInputComponent = ({ innerRef, ...rest }) => {
  return <input ref={innerRef} {...rest} />;
}

const SwedishPersonalIdentityNumberInput = createSwedishPersonalIdentityNumberInput(YourInputComponent);

const Demo = () => {
  const [value, setValue] = React.useState();

  return <SwedishPersonalIdentityNumberInput value={value} onChange={setValue} />;
}
```


## License

MIT © [Jonathan Persson](https://github.com/jonathanp)

[npm-url]: https://npmjs.org/package/react-swedish-personal-identity-number-input
[npm-image]: https://badge.fury.io/js/react-swedish-personal-identity-number-input.svg
[travis-image]: https://travis-ci.org/jonathanp/react-swedish-personal-identity-number-input.svg
[travis-url]: https://travis-ci.org/jonathanp/react-swedish-personal-identity-number-input