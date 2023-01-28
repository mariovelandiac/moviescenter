const express = require("express")
const moviesRouter = require("./movies.router.js");
const directorsRouter = require("./directors.router");
const producersRouter = require("./producers.router");
const actorsRouter = require("./actors.router");

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/movies',moviesRouter);
  router.use('/directors',directorsRouter);
  router.use('/producers',producersRouter);
  router.use('/actors',actorsRouter);
}

module.exports = routerApi;
