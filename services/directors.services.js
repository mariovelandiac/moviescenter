const boom = require("@hapi/boom");
const faker = require("faker");
class DirectorsServices {
  constructor() {
    this.directors = [];
    this.generate();
  }

  async create(data) {
    const keys = Object.keys(this.directors[0]);
    const newDirector = {
    id: faker.datatype.uuid(),
    ...data
    }
    const newDirectorKeys = Object.keys(newDirector);
    if (JSON.stringify(newDirectorKeys) == JSON.stringify(keys)) {
      this.directors.push(newDirector);
      return newDirector
    } else {
      throw boom.badRequest("format not valid")
    }
  }

  async generate() {
    this.directors = [{
      id: faker.datatype.uuid(),
      name: "Andrew Adamson",
      gender: "m",
      biography: "Andrew Adamson nació el 1 de diciembre de 1966 en Auckland, Nueva Zelanda. Es un productor y director, conocido por Shrek 2 (2004), Shrek (2001) y Las crónicas de Narnia: El león, la bruja y el ropero (2005). Está casado con Gyulnara Karaeva desde el 16 de enero de 2016. Ha estado casado con Nikki Donald."
    },{
      id: faker.datatype.uuid(),
      name: "Lee Unkrich",
      gender: "m",
      biography: "Lee Unkrich nació el 8 de agosto de 1967 en Cleveland, Ohio, Estados Unidos. Es un editor, conocido por Coco (2017), Toy Story 2 (1999) y Toy Story 3 (2010). Está casado con Laura Century desde el 5 de septiembre de 1993. Tienen tres niños."
    },
    {
      id: faker.datatype.uuid(),
      name: "Guillermo del Toro",
      gender: "m",
      biography: "Guillermo del Toro nació el 9 de octubre de 1964 en Guadalajara, Jalisco, México. Es un escritor y productor, conocido por El laberinto del fauno (2006), Hellboy (2004) y La forma del agua (2017). Está casado con Kim Morgan desde mayo de 2021. Ha estado casado con Lorenza Newton."
    }];
  }

  async find() {
    return this.directors
  }

  async findOne(id) {
    const director = this.directors.find(item => item.id === id);
    if (!director) {
      throw boom.notFound("director not found")
    }
    return director
  }

  async update(id, changes) {
    const index = this.directors.findIndex(item => item.id === id);
    // validacion de existencia de la película
    if (index === -1) {
      throw boom.notFound("director not found")
    }
    const director = this.directors[index];
    this.directors[index] = {
      ...director,
      ...changes
    }

    return this.directors[index]
  }

  async delete(id) {
    const index = this.directors.findIndex(item => item.id === id);
    // validacion de existencia de la película
    if (index === -1) {
      throw boom.notFound("director not found")
    }
    this.directors.splice(index,1);
    return { id }
  }

}

module.exports = DirectorsServices;
