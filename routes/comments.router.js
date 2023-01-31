const express = require("express")
const router = express.Router();
const CommentsServices = require("../services/comments.services.js");
const service = new CommentsServices();


router.get("/", async (req, res) => {
  const comments = await service.find();
  res.json(comments)
});

module.exports = router;
