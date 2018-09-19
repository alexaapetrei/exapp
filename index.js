const express = require('express')
const compression = require('compression')
const app = express()

app.use(compression())
app.get('/', function (req, res) {
  res.send('Hello World of Azure!')
})

var port = process.env.PORT || 1337;

app.listen(port, function () {
  console.log('Example app listening on port '+port+' !')
})
