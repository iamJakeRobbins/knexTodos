const express = require('express');
const app = express();
const port = 3000;
const queries = require('./db/queries')

app.set('view engine', 'hbs');

app.get('/', (req, res) =>{
  res.render('index');
})

app.get('/todo',(req, res) =>{
	knex
	.return
})


app.listen(port, () =>{
	console.log(`listening in at ${port}`);
})
