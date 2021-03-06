// const list = (names) => {
//   const nameArr = names.map((item) => item.name)
//   let str = ''
//   nameArr.forEach((item, i) => {
//     if (nameArr.length === 1) {
//       str += item
//     } else if (i === nameArr.length - 1) {
//       str += ` & ${item}`
//     } else if (i === 0) {
//       str += item
//     } else {
//       str += `, ${item}`
//     }
//   })
//   return str
// }

// Solution 1:
const list = (names) => {
  const nameArr = names.map((item) => item.name)
  let str = ''
  nameArr.forEach((item, i) => {
    nameArr.length === 1
      ? (str += item)
      : i === nameArr.length - 1
      ? (str += ` & ${item}`)
      : i === 0
      ? (str += item)
      : (str += `, ${item}`)
  })
  return str
}

// Solution 2:
const list = (names) => {
  names = names.map((v) => v.name)
  return names.concat(names.splice(-2).join(' & ')).join(', ')
}

// Solution 3 : by
const list = (names) => {
  return names.reduce((prev, current, index, arr) => {
    return index === 0
      ? current.name
      : index === arr.length - 1
      ? `${prev} & ${current.name}`
      : `${prev}, ${current.name}`
  }, '')
}

// Solution 4:
const list = (names) => {
  var xs = names.map((p) => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(', ') + ' & ' + x : x || ''
}

// Solution 5:
function list(names) {
  return names
    .map((o) => o.name)
    .join(', ')
    .replace(/^(.*)(, )(.*)$/, '$1 & $3')
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]))
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]))
console.log(
  list([
    { name: 'Bart' },
    { name: 'Lisa' },
    { name: 'Maggie' },
    { name: 'Homer' },
    { name: 'Marge' },
  ])
)
console.log(list([{ name: 'Bart' }]))
