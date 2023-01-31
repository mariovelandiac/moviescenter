const { UserSchema, User } = require('./user.model');
const { CommentSchema, Comment } = require('./comment.model');
const { DirectorSchema, Director } = require('./director.model');
const { GenreSchema, Genre } = require('./genre.model');
const { MovieSchema, Movie } = require('./movie.model');
const { ProducerSchema, Producer } = require('./producer.model');
const { ActorSchema, Actor } = require('./actor.model');


function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  User.init(CommentSchema, Comment.config(sequelize));
  User.init(DirectorSchema, Director.config(sequelize));
  User.init(GenreSchema, Genre.config(sequelize));
  User.init(MovieSchema, Movie.config(sequelize));
  User.init(ProducerSchema, Producer.config(sequelize));
  User.init(ActorSchema, Actor.config(sequelize));
}

module.exports = setupModels;
