const db = require("../../config/db-config");

module.exports = {
  find 

};

async function find() {
    return await db("messages as m")
    .join("users as u", "u.id", "m.user_id")
    .join("students as s", "s.id", "m.student_id")
    .select("u.username","s.name", "m.timestamp", "text")
}
