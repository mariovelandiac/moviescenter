'use strict';

const {MOVIE_TABLE} = require('./../models/movies.model');
const { USER_MOVIE_TABLE, UserMovieSchema} = require('./../models/user_movie.model');


/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface) {
    await queryInterface.removeColumn(MOVIE_TABLE, 'watched');
    await queryInterface.addColumn(USER_MOVIE_TABLE, 'watched', UserMovieSchema.watched);
  },

  async down (queryInterface) {
    await queryInterface.addColumn(MOVIE_TABLE, 'watched');
    await queryInterface.addColumn(USER_MOVIE_TABLE, 'watched');
  }
};

