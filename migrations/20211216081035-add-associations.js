'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     * 
     */
     return queryInterface.addColumn(
      'orders', // name of Source model
      'customersId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'customers', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
    .then(() => {
      // Payment hasOne Order
      return queryInterface.addColumn(
        'orders', // name of Target model
        'paymentsId', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'payments', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      ).then(() => {
        // Order hasMany Product
        return queryInterface.addColumn(
          'products', // name of Target model
          'ordersId', // name of the key we're adding
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'orders', // name of Source model
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      });
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     * 
     */
     return queryInterface.removeColumn(
      'orders', // name of Source model
      'customersId' // key we want to remove
    ).then(() => {
      // remove Payment hasOne Order
      return queryInterface.removeColumn(
        'orders', // name of the Target model
        'paymentsId' // key we want to remove
      ).then(() => {
        // remove Order hasMany Product
        return queryInterface.removeColumn(
          'products', // name of the Target model
          'ordersId' // key we want to remove
        );
      });
    });
  }
};
