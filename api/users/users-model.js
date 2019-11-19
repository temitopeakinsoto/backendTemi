const db = require("../../config/db-config");

module.exports = {
  add,
  findByUsername
  
};

function findByUsername(username){
    return db("users").first()
    .select("id", "username")
    .where({ username })
}

async function add(user) {
    const [id] = await db("users").insert(user, "id");
  
    return findById(id);
}

function findById(id){
    return db("users").first()
    .select("id", "username")
    .where({ id })
}


