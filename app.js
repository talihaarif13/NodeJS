const express = require('express');
const app = express()
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes with controller 
const customerController = require('./controllers/Customer');
app.post('/', customerController.createCustomer);
app.get('/', customerController.readAllUsers);
app.get('/user/:id', customerController.readOneUser);
app.put('/:id', customerController.updateUser);



//routes 
// app.get('/', (req, res) => {
//     res.send("hello world");
// });

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