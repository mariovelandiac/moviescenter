'use strict';


const {CustomerSchema, CUSTOMER_TABLE} = require('./../models/customer.model');
const {CommentSchema, COMMENT_TABLE} = require('./../models/comment.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema)
    await queryInterface.addColumn(COMMENT_TABLE, 'calification', CommentSchema.calification)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE)
    await queryInterface.removeColumn(COMMENT_TABLE, 'calification')
  }
};
