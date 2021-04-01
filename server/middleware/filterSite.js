
exports.filterSite = (source) => {
  const deScripted = source.replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi, '')
  const filtered = deScripted.replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, '')
  return filtered
}
