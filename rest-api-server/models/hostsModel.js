const {pool} = require("../dbcon");
const util = require('util');
const query = util.promisify(pool.query).bind(pool);


async function retrieveHosts() {
    try {
        const rows = await query("SELECT * FROM Hosts");
        return rows
    } catch (err) {
        throw err;
    }
}

async function retrieveHost ( host_unique_id ) {
    try {
        const sql = "SELECT * FROM Hosts WHERE host_unique_id = (?)";
        const inserts = [host_unique_id];
        const rows = await query(sql, [inserts]);
        return rows
    } catch (err) {
        throw err;
    }
}

async function createHost( name, phone_number, email, address_of_host ) {
    try {
        const sql = "INSERT INTO Hosts(name, phone_number, email, address_of_host) VALUES (?)";
        const inserts = [name, phone_number, email, address_of_host];
        const rows = await query(sql, [inserts]);
        return rows
    } catch (err) {
        throw err;
    }
}


exports.retrieveHosts = retrieveHosts;
exports.retrieveHost = retrieveHost;
exports.createHost = createHost;