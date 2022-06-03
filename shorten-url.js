function shortenUrl(shortenLength) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  const allLettersArray = (lowerCaseLetters + upperCaseLetters + numbers).split(
    ''
  )

  let str = ''
  for (let i = 1; i <= shortenLength; i++) {
    str += getARandomChar(allLettersArray)
  }

  return str
}

function getARandomChar(array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

module.exports = shortenUrl
