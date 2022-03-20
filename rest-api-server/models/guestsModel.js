const {pool} = require("../dbcon");
const util = require('util');
const query = util.promisify(pool.query).bind(pool);


async function retrieveGuests() {
    try {
        const rows = await query("SELECT * FROM Guests");
        return rows
    } catch (err) {
        throw err;
    }
}

async function createGuest( phone_number, name, address_of_guest, email ) {
    try {
        const sql = "INSERT INTO Guests(phone_number, name, address_of_guest, email) VALUES (?)";
        const inserts = [phone_number, name, address_of_guest, email];
        const rows = await query(sql, [inserts]);
        // pool.release()
        return rows
    } catch (err) {
        throw err;
    }
}

exports.retrieveGuests = retrieveGuests;
exports.createGuest = createGuest;