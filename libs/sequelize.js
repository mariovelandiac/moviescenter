const { Sequelize } = require('sequelize');
const { config } = require('./../config/config');
const setupModels = require('./../db/models')
// se configura para enviar una sola URL con toda la info
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword)
// url de conexión
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true
});

// acá se configuran e inicializan las entidades de la base de datos con sus respectivas
// variables y constrains
setupModels(sequelize);


// acá sincronizamos el comportamiento del ORM con la base de datos
sequelize.sync();

module.exports = sequelize
