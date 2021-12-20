'use strict';
const fs = require('fs');
var readline = require('readline');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // reading file using sync way, its block event loop untill it finish reading file
    // console.log('hello');
    // var data = require("fs").readFileSync("users.CSV", "utf8")
    // data = data.split("\r\n")
    // for (let i in data) { 
    //   console.log(data[i])
    // }
    
    let stream = fs.createReadStream('users.csv')
    const reader = readline.createInterface({
      input: stream,
      crlfDelay: Infinity
    })

    let arr = []
    for await (const row of reader){
      let split_row  = row.split(',')
      arr.push({name:split_row[0], createdAt : new Date(), updatedAt : new Date()})
    }
    return await queryInterface.bulkInsert('orders', arr);
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
