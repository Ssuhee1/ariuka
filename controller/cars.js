const { find, insert } = require("../lib/knex");

const handleGet = async (req, res, next) => {
  try {
    const result = await find();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send(error.message);
  } finally {
    next();
  }
};

const handlePost = async (req, res, next) => {
  try {
    const result = await insert(req.body);
    console.log(result);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(404).send(error.message);
  } finally {
    next();
  }
};

const handlePut = async (req, res, next) => {
  try {
  } catch (error) {}
  res.send("handlePut response");
};

const handleDelete = async (req, res, next) => {
  try {
  } catch (error) {}
  res.send("handleDelet response");
};

module.exports = { handleGet, handlePost, handlePut, handleDelete };
