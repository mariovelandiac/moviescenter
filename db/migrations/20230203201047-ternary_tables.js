'use strict';


const { ACTOR_MOVIE_TABLE, ActorMovieSchema} = require('./../models/actor_movie.model');
const { USER_MOVIE_TABLE, UserMovieSchema} = require('./../models/user_movie.model');
const { GENRE_MOVIE_TABLE, GenreMovieSchema} = require('./../models/genre_movie.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ACTOR_MOVIE_TABLE, ActorMovieSchema);
    await queryInterface.createTable(USER_MOVIE_TABLE, UserMovieSchema);
    await queryInterface.createTable(GENRE_MOVIE_TABLE, GenreMovieSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ACTOR_MOVIE_TABLE);
    await queryInterface.dropTable(USER_MOVIE_TABLE);
    await queryInterface.dropTable(GENRE_MOVIE_TABLE);
  }
};
