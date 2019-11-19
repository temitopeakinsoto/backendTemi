const db = require("../../config/db-config");

module.exports = {
  find,
  findById,
  add

};

async function find() {
    return await db("messages as m")
    .join("users as u", "u.id", "m.user_id")
    .join("students as s", "s.id", "m.student_id")
    .select("u.username as sender","s.name as recipient", "m.timestamp", "text")
}

function findById(id){
    return db("messages as m")
    .join("users as u", "u.id", "m.user_id")
    .join("students as s", "s.id", "m.student_id")
    .select("u.username","s.name", "m.timestamp", "text")
    .where({ "m.student_id": id })
}

function getById(id){
    return db("messages as m")
    .join("users as u", "u.id", "m.user_id")
    .join("students as s", "s.id", "m.student_id")
    .select("u.username","s.name", "m.timestamp", "text")
    .where({ "m.id": id })
}

async function add(message) {
    const [id] = await db("messages").insert(message, "id");

    return getById(id);
}

