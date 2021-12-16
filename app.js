const express = require('express');
const app = express()
var bodyParser = require("body-parser");



app.get('/', (req, res) => {
    res.send("hello world");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/',function(req,res){
    var name = req.body.username;
    console.log(name);
    res.send(name);
});

//middleware
function logOriginalUrl(req, res, next){
    console.log('request url', req.originalUrl);
    next();
}
function logMethod(req, res, next){
    console.log('request type', req.method);
    next();
}
var logStuff = [logOriginalUrl, logMethod];
app.get('/user', logStuff, function(req, res, next){
    res.send('user info');
})




app.listen(3000, () => {
    console.log("app listening on 3000");
})