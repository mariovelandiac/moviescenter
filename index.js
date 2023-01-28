const express = require("express");
const os = require("os");
const routerApi = require("./routes");
const app = express();
const port = 3000;
const IP = os.networkInterfaces().eth0[0].address;
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

// habilitar uso de JSON
app.use(express.json());

// habilita Router
routerApi(app);

// Middleware de manejo de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


// ponemos a escuchar al servidor y notificamos
app.listen(port, () => {
  console.log(`Operando en el puerto http://${IP}:${port}`)
})
