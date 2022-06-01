function shortenUrl (rawUrl) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  const allLettersArray = (lowerCaseLetters + upperCaseLetters + numbers).split('')

  let shortUrl = ''
  for (let i = 1; i <= 6; i++) {
    shortUrl += getARandomChar(allLettersArray)
  }

  return rawUrl = `https://url-shortener.herokuapp.com/${shortUrl}`
}

function getARandomChar (array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

module.exports = shortenUrl