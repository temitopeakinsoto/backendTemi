const db = require('../../config/db-config');

module.exports = {
    find,
    findDeadlines    
}

async function find() {
    return await db("projects").select("id", "project_name");
}

function findDeadlines() {
    return db("projectsTdeadlines")
}