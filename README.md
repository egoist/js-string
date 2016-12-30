# js-string

> Stringify JSON without double quotes `""`

## Install

```bash
yarn add js-string
```

## Usage

```js
const jsString = require('js-string')
jsString(obj)
// or
jsString(json)
```

## Example

Input:

```js
{
  foo: 'bar',
  bar: {
    foo: 'bar',
    baz: 'lol'
  },
  baz: [1, 2, 3],
  zoo: [
    {
      foo: 'bar',
      wow: new Date()
    },
    {
      baz: [1,2, 'foo'],
      haha: undefined,
      lol: {
        foo: {
          bar: 123
        }
      }
    }
  ]
}
```

Output, using `JSON.stringify()`:

```js
{
  "foo": "bar",
  "bar": {
    "foo": "bar",
    "baz": "lol"
  },
  "baz": [
    1,
    2,
    3
  ],
  "zoo": [
    {
      "foo": "bar",
      "wow": "2016-12-30T09:49:57.255Z"
    },
    {
      "baz": [
        1,
        2,
        "foo"
      ],
      "lol": {
        "foo": {
          "bar": 123
        }
      }
    }
  ]
}
```

Output, using `js-string`:

```js
{
  foo: 'bar',
  bar: {
    foo: 'bar',
    baz: 'lol'
  },
  baz: [1, 2, 3],
  zoo: [{
    foo: 'bar',
    wow: 'Fri Dec 30 2016 17:49:57 GMT+0800 (CST)'
  }, {
    baz: [1, 2, 'foo'],
    haha: undefined,
    lol: {
      foo: {
        bar: 123
      }
    }
  }]
}
```

## License

MIT &copy; EGOIST
