const html = 'I altered Jibberboy2000s answer to include several <BR /> tag formats, remove everything inside <SCRIPT> and <STYLE> tags, <p>format the resulting HTML by removing multiple line breaks and spaces and convert some HTML-encoded code into normal. After some testing it appears that you can convert most of full web pages into simple text where page title and content are retained.<h3>In the simple example</h3></p>,<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><!--comment--><head><title>This is my title</title><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"><style>body {margin-top: 15px;}a { color: #D80C1F; font-weight:bold; text-decoration:none; }</style></head><body><center><h1>This string has</h2> <i>html</i> code i want to <b>remove</b><br>In this line <a href="http://www.bbc.co.uk">BBC</a> with link is mentioned.<br>Now back to &quot;normal text&quot; and stuff using &lt;html encoding gt<center></body></html>'

// store source in var
// new variable is only headers
// next variable is from header to next header
// obj = newvar: nextvar
// fit in array and send to react to map

const { filterSite } = require('./filterSite.js')
const { checkWhiteList } = require('./checkWhiteList.js')

exports.parseSite = (source, cb) => {
  const filtered = filterSite(html)

  const parsedSite = filtered.split('<').filter((tag) => checkWhiteList(tag)).map((tag) => checkWhiteList(tag)).join('')

  return cb(null, parsedSite)
}
