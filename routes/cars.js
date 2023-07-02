var express = require("express");
var router = express.Router();
const {
  handleGet,
  handlePost,
  handlePut,
  handleDelete,
} = require("../controller/cars");

/* GET users listing. */
router.get("/", handleGet);
router.post("/", handlePost);
router.put("/", handlePut);
router.delete("/", handleDelete);

module.exports = router;
