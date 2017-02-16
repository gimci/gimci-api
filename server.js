var express = require('express')
 
var app = express()
 
app.get('/search/:query', function(req, res) {
	console.log(1, req.params.query)
  res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
})
 
app.listen(3000)