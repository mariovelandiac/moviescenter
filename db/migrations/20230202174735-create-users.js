'use strict';



const {UserSchema, USER_TABLE} = require('./../models/user.model');
const {CommentSchema, COMMENT_TABLE} = require('./../models/comment.model');
const {DirectorSchema, DIRECTOR_TABLE} = require('./../models/director.model');
const {GenreSchema, GENRE_TABLE} = require('./../models/genre.model');
const {MovieSchema, MOVIE_TABLE} = require('./../models/movies.model');
const {ProducerSchema, PRODUCER_TABLE} = require('./../models/producer.model');
const {ActorSchema, ACTOR_TABLE} = require('./../models/actor.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // CREAR TABALA, migracion
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(COMMENT_TABLE, CommentSchema);
    await queryInterface.createTable(DIRECTOR_TABLE, DirectorSchema);
    await queryInterface.createTable(GENRE_TABLE, GenreSchema);
    await queryInterface.createTable(MOVIE_TABLE, MovieSchema);
    await queryInterface.createTable(PRODUCER_TABLE, ProducerSchema);
    await queryInterface.createTable(ACTOR_TABLE, ActorSchema);
  },

  // BORRAR TABLA
  async down (queryInterface) {
    await queryInterface.drop(USER_TABLE);
    await queryInterface.drop(COMMENT_TABLE);
    await queryInterface.drop(DIRECTOR_TABLE);
    await queryInterface.drop(GENRE_TABLE);
    await queryInterface.drop(MOVIE_TABLE);
    await queryInterface.drop(PRODUCER_TABLE);
    await queryInterface.drop(ACTOR_TABLE);
  }
};
