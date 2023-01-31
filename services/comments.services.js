// const boom = require("@hapi/boom");
const { models } = require('./../libs/sequelize')


class CommentsService {
  constructor() {
  }

  generate() {

  }

  async create(data) {
    return data
  }

  async find() {
    const rta = await models.Comment.findAll();
    return rta;
  }

  async findOne(id) {
    return {id}
  }

  async update(id, changes) {
    return {id, changes}
  }

  async delete(id) {
    return {id}
  }
}

module.exports = CommentsService
