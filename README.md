ieee754
===============

Read/write IEEE754 floating point numbers from/to a Buffer or array-like object.

[![build status](https://secure.travis-ci.org/feross/ieee754.png)](http://travis-ci.org/feross/ieee754)

[![testling badge](https://ci.testling.com/feross/ieee754.png)](https://ci.testling.com/feross/ieee754)

## install

With [npm](https://npmjs.org) do:

`npm install ieee754`

## methods

`var ieee754 = require('ieee754')`

The `ieee754` object has the following functions:

```
exports.readIEEE754 = function (buffer, offset, isLE, mLen, nBytes)
exports.writeIEEE754 = function (buffer, value, offset, isLE, mLen, nBytes)
```

## license

MIT. Copyright (C) 2013 [Feross Aboukhadijeh](http://feross.org) & Romain Beauxis.
