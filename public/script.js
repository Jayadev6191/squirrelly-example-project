fetch('/basic').then(function(res){
    res.json().then(function(data){
        document.getElementById('basic').innerHTML = data.basic;
    });
}).catch(function(err){
    console.log(err);
});