const {pool} = require("../dbcon");
const util = require('util');

async function retrieveHosts() {
    try {
        const query = util.promisify(pool.query).bind(pool);  // Use util.promisify() with node SQL
        const rows = await query("SELECT * FROM Hosts");
        return rows
    } catch (err) {
        throw err;
    }
}

exports.retrieveHosts = retrieveHosts;