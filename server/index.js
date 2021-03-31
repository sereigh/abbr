const express = require('express')

const axios = require('axios')

const writeSite = require('./middleware/writeSite.js')

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config({ path: './.env' })
}

const app = express()
const { PORT } = process.env
const { HOST } = process.env

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(`${__dirname}../dist`))

app.get('/', (req, res) => {
  axios.get('https://jamesclear.com/saying-no')
    .then((response) => writeSite(response, (err, result) => {
      if (err) { return console.error(err) }
      return console.log(result)
    }))
    .catch((err) => console.error(err))
    .then(() => res.status(200).end())
})

app.listen(PORT, (err) => {
  if (err) { console.error(err) } else { console.log(`listening at http://${HOST}:${PORT}`) }
})
