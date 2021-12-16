'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn(
      'customers', 'petName', 
      { 
        type: Sequelize.STRING 
      }
      ).then(()=>{
        return queryInterface.changeColumn('customers', 'petName', {
          type: Sequelize.TEXT,
          defaultValue: 'abc',
          allowNull: true
        });
      }).then(()=>{
        return queryInterface.removeColumn('customers', 'petName', { /* query options */ });
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
