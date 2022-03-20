const {pool} = require("../dbcon");
const util = require('util');
const query = util.promisify(pool.query).bind(pool);  // Use util.promisify() with node SQL

async function retrieveProperties() {
    try {
        const rows = await query("SELECT * FROM Properties");
        return rows
    } catch (err) {
        throw err;
    }
}

async function retrieveProperty ( property_unique_id ) {
    try {
        const sql = "SELECT * FROM Properties WHERE property_unique_id = (?)";
        const inserts = [property_unique_id];
        const rows = await query(sql, [inserts]);
        return rows
    } catch (err) {
        throw err;
    }
}

exports.retrieveProperties = retrieveProperties;
exports.retrieveProperty = retrieveProperty;