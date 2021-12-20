const { ValidationError } = require('sequelize/dist');
const customerModel = require('../models').customers;


exports.createCustomer = async (req, res, next) => {
    try{
        let user = await customerModel.create({'name' : req.body.username});
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        if(err instanceof ValidationError){
            res.status(400).json({'error' : err.errors[0].message})
        }else{
            res.status(500).json({'error' : err });
        }
    }
    
}
exports.readAllUsers = async (req, res, next) => {
    try{
        let users = await customerModel.findAll();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({'error' : err });
    }
}
exports.readOneUser = async (req, res, next) => {
    try{
        console.log(req.params.id);
        let user = await customerModel.findAll({
            where: {
                id : req.params.id
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
        console.log(req.params.id);
        let user = await customerModel.update({ name: "arif" }, {
            where: {
              id: req.params.id
            }
        });
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({'error' : err });
    }
}