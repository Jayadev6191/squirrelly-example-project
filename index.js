let express = require('express');
let path = require('path');
let Sqrl = require("squirrelly");
let app = express();

app.set('view engine', 'squirrelly')
// setting up squirrelly templates under views
app.set('views', './views')

// Setting up routes
app.use('/', require('./routes/'))

let server = app.listen(4000, function(){
    console.log("listening to request on port 4000");
});