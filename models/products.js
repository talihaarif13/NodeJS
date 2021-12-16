'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.belongsToMany(models.tags, { through: 'productstags' });
    }
  };
  products.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};