const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World of Azure!')
})

var port = process.env.PORT || 1337;

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
