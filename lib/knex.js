const knex = require("knex");
const config = require("./knexfile");

const db = knex(config.development);

const find = () => db("cars");
const findById = (id) => db("cars").where({ id: Number(id) });
const insert = (post) =>
  db("cars")
    .insert(post)
    .then((ids) => ({ id: ids[0] }));
const update = (id, post) => db("cars").where("id", Number(id)).update(post);
const remove = (id) => db("cars").where("id", Number(id)).del();

// Create database
const up = () =>
  db.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.text("vin", 17).unique().notNullable();
    tbl.text("make", 128).notNullable();
    tbl.text("model", 128).notNullable();
    tbl.integer("mileage", 7).notNullable();
    tbl.text("transmissionType", 128);
    tbl.text("titleStatus", 128);
  });

const down = () => db.schema.dropTableIfExists("cars");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  up,
  down,
};
