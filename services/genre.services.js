// const boom = require("@hapi/boom");
// const faker = require("faker");
const getConection = require("../libs/postgres");


class GenreService {
  constructor() {
  }

  generate() {

  }

  async create(data) {
    return data
  }

  async find() {
    const client = await getConection();
    const rta = await client.query("SELECT * FROM tasks")
    return rta.rows;
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

module.exports = GenreService
