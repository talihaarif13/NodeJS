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
 

app.listen(3000, () => {
    console.log("app listening on 3000");
})