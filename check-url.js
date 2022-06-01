function checkUrl (rawUrl) {
  // 空白
  if (!rawUrl.trim()) {
    return 'Please enter a valid URL'
  } else {
     // 非 https 開頭
    const Protocal = rawUrl.slice(0, 5)
    if (Protocal !== 'https') {
      return 'Please enter a valid URL'
    }
  }
}

module.exports = checkUrl