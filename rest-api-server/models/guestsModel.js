const {pool} = require("../dbcon");
const util = require('util');
const query = util.promisify(pool.query).bind(pool);  // Use util.promisify() with node SQL


async function retrieveGuests() {
    try {
        const rows = await query("SELECT * FROM Guests");
        return rows
    } catch (err) {
        throw err;
    }
}

async function retrieveGuest ( guest_unique_id ) {
    try {
        const sql = "SELECT * FROM Guests WHERE guest_unique_id = (?)";
        const inserts = [guest_unique_id];
        const rows = await query(sql, [inserts]);
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

async function updateGuestPhoneNumber( update_condition, property_to_updated ) {
    try {
        const sql = "UPDATE Guests SET phone_number = (?) WHERE guest_unique_id = (?)";
        let inserts = [property_to_updated.phone_number, update_condition._guest_unique_id];
        const rows = await query(sql, inserts);
        return 1
    } catch (err) {
        throw err;
    }
}

async function deleteGuest( guest_unique_id ) {
    try {
        const sql = "DELETE FROM Guests WHERE guest_unique_id = (?)"
        let inserts = [guest_unique_id];
        const rows = await query(sql, inserts);
        return 1
    } catch (err) {
        throw err;
    }
}


exports.retrieveGuests = retrieveGuests;
exports.retrieveGuest = retrieveGuest;
exports.createGuest = createGuest;
exports.updateGuestPhoneNumber = updateGuestPhoneNumber;
exports.deleteGuest = deleteGuest;