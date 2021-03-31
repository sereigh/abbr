const fs = require('fs')

const writeSite = (data, cb) => {
  fs.writeFile(`site.csv`, data.data, (err) => {
    if (err) { return cb(err, null) }
    return cb(null, 'sucess');
  })
}

module.exports = writeSite
