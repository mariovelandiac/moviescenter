const { Pool } = require('pg');
const { config } = require('./../config/config');
// se configura para enviar una sola URL con toda la info
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword)
// url de conexión
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

// se le envía a pool la base de datos
const pool = new Pool({connectionString: URI});

module.exports = pool;
