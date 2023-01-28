const boom = require("@hapi/boom")
const faker = require("faker");


class MoviesServices {
  constructor() {
    this.movies = [];
    this.generate();
  }

  generate() {
    this.movies = [{
      id: faker.datatype.uuid(),
      name: "Shrek 2",
      year: 2004,
      watched: true,
      rating: "7.3",
      description: "Los padres de la princesa Fiona la invitan a ella y a Shrek a cenar para celebrar su matrimonio. Si supieran que los dos recién casados son ogros",
      duration: 93 // minutos
    },
    {
      id: faker.datatype.uuid(),
      name: "Coco",
      year: 2017,
      watched: true,
      rating: "8.4",
      description: "El aspirante a músico Miguel, entra a la Tierra de los Muertos para encontrar a su tatarabuelo, un legendario cantante.",
      duration: 60 + 45 // minutos
    },
    {
      id: faker.datatype.uuid(),
      name: "Pinocho de Guillermo del Toro",
      year: 2022,
      watched: true,
      rating: "7.7",
      description: "En la Italia fascista de Benito Mussolini, el deseo de Geppetto, un viejo carpintero que perdió a su hijo durante la primera guerra mundial, se vuelve realidad, dándole vida a un muñeco de madera llamado Pinocho",
      duration: 60 + 57 // minutos
    }];
  }

  async create(data) {
    const newMovie = {
    id: faker.datatype.uuid(),
    ...data
    }
    return newMovie
  }

  async find() {
    return this.movies
  }

  async findeOne(id) {
    return this.movies.find(item => item.id == id)
  }

  async update(id, changes) {
    const index = this.movies.findIndex(item => item.id === id);
    // validacion de existencia de la película
    if (index === -1) {
      throw boom.notFound("movie not found")
    }
    const movie = this.movies[index];
    this.movies[index] = {
      ...movie,
      ...changes
    }

    return this.movies[index]
  }

  async delete(id) {
    const index = this.movies.findIndex(item => item.id === id);
    // validacion de existencia de la película
    if (index === -1) {
      throw boom.notFound("movie not found")
    }
    this.movies.splice(index,1);
    return { id }
  }
}

module.exports = MoviesServices;
