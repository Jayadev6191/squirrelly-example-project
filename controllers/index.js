exports.index = function(req, res) {
    res.render('index',{
        title: 'template engines',
        template_engines: [
            "Mustache",
            "Handlebars",
            "Marko JS",
            "Squirrelly"
        ]
    });
}   
