var express = require("express");
var router = express.Router();
const { } = require('../controller/index')
const { up } = require("../lib/knex");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const result = await up();
  res.render("index", { title: "Express" });
});

module.exports = router;
