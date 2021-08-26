// base libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// intialize app
const app = express();


// configure apps
app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({extended: true, limit:"50mb"}))
app.use(cors());
app.use('/images', express.static(__dirname + '/static/images/'));
app.use('/videos', express.static(__dirname + '/static/videos/'));
//------------------------------------------
// config mongodb
// const mongodbURI = 'mongodb://localhost:27017/surveySystem'
const mongodbURI = 'mongodb+srv://mustafa:contactpassword@cluster0.tpo90.mongodb.net/contacts?retryWrites=true&w=majority'

mongoose.connect(mongodbURI, {useNewUrlParser: true,useUnifiedTopology: true});
// Throw an error if the connection fails
mongoose.connection.on('error', function(err) {
    if(err) {throw err;}
  });
//-------------------------------------------

// routes ;
const user_routes = require('./routes/user_routes');
const form_routes = require('./routes/forms_routes');



// load routes
app.use('/api/user',user_routes);
app.use('/api/form',form_routes);   

// home page test
app.use(express.static(path.join(__dirname, '/build')));

app.get('/form/list', (req, res) => {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
  });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});


// run app
const port = 5050;

const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});