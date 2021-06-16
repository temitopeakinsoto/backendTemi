const db = require("../../config/db-config");

module.exports = {
  find,
  findById,
  add,
  remove,
  getStudentProjects
};

async function find() {
    return await db("students").select("id","name")
}

function findById(id){
    return db("students").first()
    .select("id", "name")
    .where({ id })
}

async function add(student) {
    const [id] = await db("students").insert(student, "id");
  
    return findById(id);
}

function remove(id) {
    return db('students')
      .where({ id })
      .del();
}

function getStudentProjects(id) {
    return db("studentsTprojects as stp")
    .join("projects as p", "p.id", "stp.project_id")
    .select("p.project_name")
    .where("stp.student_id", id)
}

  
