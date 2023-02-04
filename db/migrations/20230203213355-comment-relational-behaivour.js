'use strict';

const {COMMENT_TABLE, CommentSchema} = require('./../models/comment.model');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(COMMENT_TABLE, 'user_id', CommentSchema.userId);
    await queryInterface.addColumn(COMMENT_TABLE, 'movie_id', CommentSchema.movieId);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(COMMENT_TABLE, 'user_id');
    await queryInterface.removeColumn(COMMENT_TABLE, 'movie_id');
  }
};

