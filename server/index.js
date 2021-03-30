const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlendcoded({ extended: true }))

app.use(express.static(__dirname + '../dist'))

app.get('/', (req, res) => {
  res.status(200).end()
})

app.listen(PORT, (err) => {
  if (err) { return console.error(err) } else { return `listening on port ${process.env.PORT}` }
})
