const express = require("express")
const router = express.Router();
const GenreServices = require("../services/genre.services.js");
const service = new GenreServices();


router.get("/", async (req, res) => {
  const genre = await service.find();
  res.json(genre)
});

module.exports = router;

