const express = require('express')

// const axios = require('axios')

const { parseSite } = require('./middleware/parseSite.js')

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config({ path: './.env' })
}

const app = express()
const { PORT } = process.env
const { HOST } = process.env

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(`${__dirname  }../dist`))

app.get('/', (req, res) => {
parseSite(req.params, (err, result) => {
      if (err) { res.status(404).send(err) }
      res.status(200).send(result)
    })
})

app.listen(PORT, (err) => {
  if (err) { console.error(err) } else { console.log(`listening at http://${HOST}:${PORT}`) }
})
