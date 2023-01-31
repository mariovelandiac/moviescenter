const express = require("express")
const router = express.Router();
const UsersServices = require("../services/users.services.js");
const service = new UsersServices();


router.get("/", async (req, res) => {
  const user = await service.find();
  res.json(user)
});

module.exports = router;
