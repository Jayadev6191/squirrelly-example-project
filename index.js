let express = require('express');
let path = require('path');
let Sqrl = require("squirrelly");
let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile('index.html', {templateResult});
});

app.get('/basic', function(req, res){
    let myTemplate = `This is a template
    My favorite template engine is: {{fav}}
    My favorite kind of cake is: {{cake}}`;
    
    let templateResult = Sqrl.Render(myTemplate, {
        fav: "Squirrelly", cake: "Chocolate"
    });
    
    console.log(templateResult);
    
    res.send({basic: templateResult});
});

app.get('filters', function(req, res){
    
    //let myTemplate = 
});



// serve static file
// app.use(express.static(path.join(__dirname, 'public')));

let server = app.listen(4000, function(){
    console.log("listening to request on port 4000");
});