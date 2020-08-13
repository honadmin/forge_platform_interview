const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Welcome to Forge Platform Interview')
})
 
app.listen(8080, () => console.log('server started at port 8080'))