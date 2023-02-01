const boom = require("@hapi/boom");
const { models } = require('./../libs/sequelize')


class MoviesServices {
  constructor() {
  }

  generate() {
  }

  async create(data) {
    const newMovie = await models.Movie.create(data);
    return newMovie
  }

  async find() {
    const movies = await models.Movie.findAll();
    return movies
  }

  async findeOne(id) {
    const movie = await models.Movie.findByPk(id)
    if (!movie) {
      throw boom.notFound('movie not found')
    }
    return movie
  }

  async update(id, changes) {
    const movie = await this.findeOne(id);
    const rta = await movie.update(changes);
    return rta
  }

  async delete(id) {
    const movie = await this.findeOne(id);
    movie.destroy();
    return {id}
  }
}

module.exports = MoviesServices;
