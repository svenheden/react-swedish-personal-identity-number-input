# React Swedish personal identity number input

A higher order component for formatting values in input elements as Swedish personal identity numbers

![Tests][tests-badge]
[![NPM version][npm-image]][npm-url]

## Install

```
$ npm install --save react-swedish-personal-identity-number-input
```

## Usage

```ts
import React from "react";
import { createSwedishPersonalIdentityNumberInput } from "react-swedish-personal-identity-number-input";

const YourInputComponent = ({ innerRef, ...rest }) => {
  return <input ref={innerRef} {...rest} />;
};

const SwedishPersonalIdentityNumberInput = createSwedishPersonalIdentityNumberInput(
  YourInputComponent
);

const Demo = () => {
  const [value, setValue] = React.useState();

  return (
    <SwedishPersonalIdentityNumberInput value={value} onChange={setValue} />
  );
};
```

## License

MIT © [Jonathan Svenheden](https://github.com/svenheden)

[npm-url]: https://npmjs.org/package/react-swedish-personal-identity-number-input
[npm-image]: https://badge.fury.io/js/react-swedish-personal-identity-number-input.svg
[tests-badge]: https://github.com/svenheden/react-swedish-personal-identity-number-input/workflows/Tests/badge.svg
