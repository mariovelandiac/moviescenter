'use strict';

const {DataTypes} = require("sequelize");
const {USER_TABLE} = require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(USER_TABLE, 'nickname',{
      allowNull: true,
      type: DataTypes.STRING,
    })
  },

  async down () {
    // await queryInterface.dropTable(CUSTOMER_TABLE)
  }
};

