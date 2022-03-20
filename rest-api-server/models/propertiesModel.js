const {pool} = require("../dbcon");
const util = require('util');

async function retrieveProperties() {
    try {
        const query = util.promisify(pool.query).bind(pool);  // Use util.promisify() with node SQL
        const rows = await query("SELECT * FROM Properties");
        return rows
    } catch (err) {
        throw err;
    }
}

exports.retrieveProperties = retrieveProperties;