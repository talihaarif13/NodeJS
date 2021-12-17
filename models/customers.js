'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  customers.init({
    name: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : true,
        is: /^[a-z]+$/i
      }
    }
  }, {
    hooks: {
      afterValidate: (customers, options) => {
        console.log('after create');
        customers.mood = 'happy';
      }
    },
    sequelize,
    modelName: 'customers',
  });
  return customers;
};