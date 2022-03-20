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

async function updateGuestPhoneNumber( update_condition, properties_to_updated ) {
    try {
        // guest attributes phone_number, name, address_of_guest, email
        // const sql = "UPDATE Guests SET phone_number = (?) WHERE guest_unique_id = (?)";
        let sql = ""
        let inserts = [];
        if (properties_to_updated.phone_number !== null) {
            sql = "UPDATE Guests SET phone_number = (?) WHERE guest_unique_id = (?)";
            inserts = [properties_to_updated.phone_number, update_condition._guest_unique_id];
            await query(sql, inserts);
        }
        if (properties_to_updated.name !== null) {
            sql = "UPDATE Guests SET name = (?) WHERE guest_unique_id = (?)";
            inserts = [properties_to_updated.name, update_condition._guest_unique_id];
            await query(sql, inserts);
        }
        if (properties_to_updated.address_of_guest !== null) {
            sql = "UPDATE Guests SET address_of_guest = (?) WHERE guest_unique_id = (?)";
            inserts = [properties_to_updated.address_of_guest, update_condition._guest_unique_id];
            await query(sql, inserts);
        }
        if (properties_to_updated.email !== null) {
            sql = "UPDATE Guests SET email = (?) WHERE guest_unique_id = (?)";
            inserts = [properties_to_updated.email, update_condition._guest_unique_id];
            await query(sql, inserts);
        }
        // let inserts = [properties_to_updated.phone_number, update_condition._guest_unique_id];
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