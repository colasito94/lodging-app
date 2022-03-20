const {pool} = require("../dbcon");
const util = require('util');
const query = util.promisify(pool.query).bind(pool);  // Use util.promisify() with node SQL

async function retrieveHosts() {
    try {
        const rows = await query("SELECT * FROM Hosts");
        pool.end();
        return rows
    } catch (err) {
        pool.end();
        throw err;
    }
}

exports.retrieveHosts = retrieveHosts;