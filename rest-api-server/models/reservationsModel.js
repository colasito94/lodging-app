const {pool} = require("../dbcon");
const util = require('util');
const query = util.promisify(pool.query).bind(pool);  // Use util.promisify() with node SQL

async function retrieveReservations() {
    try {
        const rows = await query("SELECT * FROM Hosts");
        return rows
    } catch (err) {
        throw err;
    }
}

exports.retrieveReservations = retrieveReservations;