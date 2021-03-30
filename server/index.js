const path = require('path')

const express = require("express")

if(process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line global-require
  require('dotenv').config({ path: './.env' });
}

const app = express()
const {PORT} = process.env
const {HOST} = process.env

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res) => {
  res.status(200).end()
})

app.listen(PORT, (err) => {
  if (err) { console.error(err); }
  else { console.log(`listening at http://${HOST}:${PORT}`); }
});
