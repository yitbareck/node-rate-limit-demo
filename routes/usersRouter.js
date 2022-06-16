const express = require("express");
const limiter = require("../middlewares/rateLimiter");
const userService = require("../services/userService");

const router = express.Router();

//Apply rate limit for GET /api/v1/users endpoint
router.get("/", [limiter], (req, res) => {
  res.send(userService.getAllUsers());
});

router.get("/:id", (req, res) => {
  const user = userService.getUserById(parseInt(req.params.id));
  if (user) return res.send(user);
  res.status(404).send("User with the specified id doesn't exist");
});

module.exports = router;
