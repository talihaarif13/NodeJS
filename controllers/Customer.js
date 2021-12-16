const { ValidationError } = require('sequelize/dist');
const db = require('../models/');


exports.createCustomer = async (req, res, next) => {
    try{
        let user = await db.customers.create({'name' : req.body.username});
        res.status(200).json(user);
    }catch(err){
        //console.log(err);
        if(err instanceof ValidationError){
            res.status(400).json({'error' : err.errors[0].message})
        }else{
            res.status(500).json({'error' : err });
        }
    }
    
}
exports.readAllUsers = async (req, res, next) => {
    try{
        let users = await db.customers.findAll();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({'error' : err });
    }
}
exports.readOneUser = async (req, res, next) => {
    try{
        console.log(req.param.id);
        let user = await db.customers.findAll({
            where: {
                id : req.param.id
            }
        });
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({'error' : err });
    }
}
exports.updateUser = async (req, res, next) => {
    try{
        console.log(req.param.id);
        let user = await User.update({ name: "arif" }, {
            where: {
              id: req.param.id
            }
        });
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({'error' : err });
    }
}