const toString = require('./')

const obj = {
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

const str = toString(obj)

console.log(JSON.stringify(obj, null, 2))

console.log(str)