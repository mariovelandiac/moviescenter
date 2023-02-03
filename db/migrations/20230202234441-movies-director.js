'use strict';
const {DataTypes} = require("sequelize");
const {MovieSchema,MOVIE_TABLE} = require('./../models/movies.model');
const {COMMENT_TABLE} = require('./../models/comment.model');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(MOVIE_TABLE, 'image', MovieSchema.image);
    await queryInterface.addColumn(MOVIE_TABLE, 'director_id', MovieSchema.directorId)
    await queryInterface.addColumn(MOVIE_TABLE, 'producer_id', MovieSchema.producerId);
    const changes = {
      allowNull: true,
      type: DataTypes.TEXT,
    };
    await queryInterface.changeColumn(COMMENT_TABLE, 'comment', changes)
  },

  async down () {
    // await queryInterface.dropTable(CUSTOMER_TABLE)
  }
};

