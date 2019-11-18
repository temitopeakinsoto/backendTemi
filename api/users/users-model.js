const db = require("../../config/db-config");

module.exports = {
  find,
  findById
};

async function find() {
    return await db("students").select("id","name")
}

function findById(id){
    return db("students").select("id", "name")
    .where({ id })
}

