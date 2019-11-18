const db = require("../../config/db-config");

module.exports = {
  find,
  findById,
  add
};

async function find() {
    return await db("students").select("id","name")
}

function findById(id){
    return db("students").select("id", "name")
    .where({ id })
}

async function add(user) {
    const [id] = await db("students").insert(user, "id");
  
    return findById(id);
}

