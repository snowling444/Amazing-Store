const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Amazing-Store');

const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const routes = require('./routes');

// app.use(express.static('public'))

// var path = require('path');
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/public/xx.jpg'));
// })

var db = mongoose.connection;
db.on('error',console.log);
db.once('open', function(){
 console.log('success!');
});

routes(app);

app.listen(3000,function(){
  console.log('3000');
})
