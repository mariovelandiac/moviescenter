const boom = require("@hapi/boom");
const faker = require("faker");

class ActorsService {
  constructor() {
    this.actors = [];
    this.generate();
  }

  generate() {
    const today = new Date();
    const yearToday = today.getFullYear();
    const limit = 100;
    for (let i = 0; i<limit; i++) {
      this.actors.push({
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        gender: faker.name.gender({boolean: true}),
        age: yearToday - faker.datatype.number({min: 1930, max: 2000}),
        isBlock: faker.datatype.boolean(),
      })
    }
  }

  async create(data) {
    const keys = Object.keys(this.actors[0]);
    const newActor = {
    id: this.actors.length + 1,
    ...data
    }
    const newActorKeys = Object.keys(newActor);
    if (JSON.stringify(newActorKeys) == JSON.stringify(keys)) {
      this.actors.push(newActor);
      return newActor
    } else {
      throw boom.badRequest("format not valid")
    }
  }

  async find() {
    return this.actors
  }

  async findOne(id) {
    const actor = this.actors.find(item => item.id === id);
    if (!actor) {
      throw boom.notFound("actor not found")
    }
    if (actor.isBlock) { // si está bloqueado
      throw boom.conflict("this actor is blocked")
    }
    return actor
  }

  async update(id, changes) {
    const index = this.actors.findIndex(item => item.id === id);
    // validacion de existencia de la película
    if (index === -1) {
      throw boom.notFound("actor not found")
    }
    const actor = this.actors[index];
    this.actors[index] = {
      ...actor,
      ...changes
    }
    return this.actors[index]
  }

  async delete(id) {
    const index = this.actors.findIndex(item => item.id === id);
    // validacion de existencia de la película
    if (index === -1) {
      throw boom.notFound("actor not found")
    }
    this.actors.splice(index,1);
    return { id }
  }
}

module.exports = ActorsService
