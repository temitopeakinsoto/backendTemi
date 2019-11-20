const db = require('../../config/db-config');

module.exports = {
    find    
}

async function find() {
    return await db("projectsTdeadlines as ptd")
    .join("projects as p", "p.id", "ptd.project_id")
    .select("p.project_name","ptd.deadline", "ptd.deadline_type")
}