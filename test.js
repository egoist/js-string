import test from 'ava'
import jsString from './'

test('main', t => {
  t.is(jsString({a: 1}), `{
  a: 1
}`)
})
