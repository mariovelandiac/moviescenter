const boom = require("@hapi/boom");
const { models } = require('./../libs/sequelize')

class ProducersServices {
  constructor() {
  }

  generate() {
  }

  async create(data) {
    const newProducer = await models.Producer.create(data);
    return newProducer
  }

  async find() {
    return this.producers
  }

  async findOne(id) {
    const producer = await models.Producer.findByPk(id);
    if (!producer) {
      throw boom.notFound('producer not found')
    }
    return producer
  }

  async update(id, changes) {
    const producer = await this.findOne(id);
    const rta = await producer.update(changes);
    return rta
  }

  async delete(id) {
    const producer = await this.findOne(id);
    await producer.destroy();
    return {id}
  }
}

module.exports = ProducersServices;
