const db = require('../../config/db-config');

module.exports = {
    find    
}

async function find() {
    return await db("projects").select("id", "project_name")
}