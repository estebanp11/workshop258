/**
 * Dependencies
 */
const express = require('express');
const bodyParser = require('body-parser');

/**
 * Modules
 */
const service = require('./service/routes');

/**
 * Constants
 */
const app = express();

/* Listen to port */
app.listen(3000, (err) => {
  if(err) return console.log('cannot init server'), process.exit(1);
  console.log('iniciando server en http://localhost:3000');
});

/* generic middlewares */
app.use(bodyParser.json());
app.use((err,req, res, next) => {
  if (!err){
    console.log(err);
    return  next();
  }
  res.status(500).send('Server Error');
});

/* set static files */
app.use(express.static(__dirname + '/static'));

/* start Service routes */
service.setRoutes(app);
