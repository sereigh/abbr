
exports.checkWhiteList = (currentTag) => {
  const whiteTags = ["p", "i", "b", "h1", "h2", "h3", "h4", "h5", "strong", "u"]
  return whiteTags.map((whiteTag)=> currentTag.includes(`${whiteTag  }>`)).indexOf(true) !== -1 ? `<${  currentTag}` : currentTag.split(">")[1]
}
