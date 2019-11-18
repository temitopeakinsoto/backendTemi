const db = require("../config/db-config.js");

module.exports = {
  find
};

async function find() {
    return await db("users").select("id","username")
}

