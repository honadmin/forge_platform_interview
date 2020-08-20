const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.send('Welcome to Forge Platform Interview')
})
 
app.listen(8080, () => console.log('server started at port 8080'))
