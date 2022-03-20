const {pool} = require("../dbcon");
const util = require('util');
const query = util.promisify(pool.query).bind(pool);


async function retrieveReservations() {
    try {
        const rows = await query("SELECT * FROM Reservations");
        return rows
    } catch (err) {
        throw err;
    }
}

async function retrieveReservation ( reservation_unique_id ) {
    try {
        const sql = "SELECT * FROM Reservations WHERE reservation_unique_id = (?)";
        const inserts = [reservation_unique_id];
        const rows = await query(sql, [inserts]);
        return rows
    } catch (err) {
        throw err;
    }
}

async function createReservation( guest_unique_id, property_unique_id,
                                  date_arrive, date_leave, guest_amount, total_price ) {
    try {
        const sql = "INSERT INTO Reservations(guest_unique_id, property_unique_id,\n" +
            "                                  date_arrive, date_leave, guest_amount, total_price) VALUES (?)";
        const inserts = [guest_unique_id, property_unique_id,
            date_arrive, date_leave, guest_amount, total_price];
        const rows = await query(sql, [inserts]);
        return rows
    } catch (err) {
        throw err;
    }
}

async function deleteReservation( reservation_unique_id ) {
    try {
        const sql = "DELETE FROM Reservations WHERE reservation_unique_id = (?)"
        let inserts = [reservation_unique_id];
        const rows = await query(sql, inserts);
        return 1
    } catch (err) {
        throw err;
    }
}
exports.retrieveReservations = retrieveReservations;
exports.retrieveReservation = retrieveReservation;
exports.createReservation = createReservation;
exports.deleteReservation = deleteReservation;