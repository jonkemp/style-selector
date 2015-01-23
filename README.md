# style-selector

> CSS selector constructor

Uses [Slick](https://github.com/subtleGradient/slick) to parse and tokenize the CSS selectors.

## Install

Install with [npm](https://npmjs.org/package/style-selector)

```
npm install --save style-selector
```

## Usage

```js
var Selector = require('style-selector'),
    sel = rule[0],
    style = rule[1],
    selector = new Selector(sel);

addProps(style, selector);
```

## Credit

The code for this module was originally taken from the [Juice](https://github.com/Automattic/juice) library.

## License

MIT
