function jsString(input, {
  indent = 2
} = {}) {
  if (typeof input === 'string') {
    input = JSON.parse(input)
  }

  let result = []
  for (const key in input) {
    result.push(`\n${getIndent(indent)}${handleKey(key)}: ${handleValue(input[key], indent)}`)
  }

  return `{${result.join(', ')}\n${getIndent(indent - 2)}}`
}

function handleValue(value, indent) {
  if (value instanceof Date) {
    return handleValue(value.toJSON())
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  if (Array.isArray(value)) {
    return `[${value.map(item => handleValue(item, indent)).join(', ')}]`
  }
  if (typeof value === 'object') {
    return jsString(value, {indent: indent + 2})
  }
  return value
}

function handleKey(key) {
  if (/[^\w]/.test(key)) {
    return `'${key}'`
  }
  return key
}

function getIndent(length) {
  return ' '.repeat(length)
}

module.exports = jsString
