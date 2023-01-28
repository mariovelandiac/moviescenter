const boom = require("@hapi/boom");
const faker = require("faker");
class ProducersServices {
  constructor() {
    this.producers = [];
    this.generate();
  }

  generate() {
    this.producers = [{
      id: faker.datatype.uuid(),
      name: "DreamWorks",
      description: "DreamWorks es una productora audiovisual estadounidense, fundada en 1994 por Steven Spielberg, Jeffrey Katzenberg y David Geffen, con sede en la ciudad de Glendale, California. Su película más exitosa hasta el momento es Shrek 2, con más de 900 millones de dólares de recaudación."
    },
    {
      id: faker.datatype.uuid(),
      name: "Disney",
      description: "Walt Disney Pictures1 (llamado simplemente Disney desde 2011)2​ es un estudio de producción cinematográfico estadounidense y filial de Walt Disney Studios, propiedad de The Walt Disney Company. El estudio es el productor insignia de largometrajes de acción en vivo dentro de la unidad de Walt Disney Studios, y tiene su sede en Walt Disney Studios en Burbank, California"
    },
    {
      id: faker.datatype.uuid(),
      name: "ShadowMachine",
      description: "ShadowMachine es una productora y estudio de animación estadounidense para cine, televisión, comerciales y videos musicales."
    },
    {
      id: faker.datatype.uuid(),
      name: "Marvel Studios",
      description:"Marvel Studios, LLC es una productora de cine y televisión estadounidense que es una subsidiaria de Walt Disney Studios, una división de Walt Disney Company. Marvel Studios produce las películas y series de Marvel Cinematic Universe, basadas en personajes que aparecen en las publicaciones de Marvel Comics."
    }
    ];
  }

  async create(data) {
    const keys = Object.keys(this.producers[0]);
    const newMovie = {
    id: faker.datatype.uuid(),
    ...data
    }
    const newMovieKeys = Object.keys(newMovie);
    if (JSON.stringify(newMovieKeys) == JSON.stringify(keys)) {
      this.producers.push(newMovie);
      return newMovie
    } else {
      throw boom.badRequest("format not valid")
    }
  }

  async find() {
    return this.producers
  }

  async findOne(id) {
    if (id > this.producers.length) {
      throw boom.notFound("producer not found")
    }
    return this.producers.find(item => item.id === id)
  }

  async update(id, changes) {
    const index = this.producers.findIndex(item => item.id === id);
    // validacion de existencia de la película
    if (index === -1) {
      throw boom.notFound("producer not found")
    }
    const producer = this.producers[index];
    this.producers[index] = {
      ...producer,
      ...changes
    }

    return this.producers[index]
  }

  async delete(id) {
    const index = this.producers.findIndex(item => item.id === id);
    // validacion de existencia de la película
    if (index === -1) {
      throw boom.notFound("producer not found")
    }
    this.producers.splice(index,1);
    return { id }
  }
}

module.exports = ProducersServices;
