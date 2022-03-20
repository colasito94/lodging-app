const {pool} = require("../dbcon");
const util = require('util');
const query = util.promisify(pool.query).bind(pool);


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

async function createProperty( property_name, bedroom_amount, bed_amount, bath_amount,
                               capacity, price_per_night, style, host_unique_id, street_address_property ) {
    try {
        const sql = "INSERT INTO Properties(property_name, bedroom_amount, bed_amount, bath_amount, capacity, " +
            "price_per_night, style, host_unique_id, street_address_property) VALUES (?)";
        const inserts = [property_name, bedroom_amount, bed_amount, bath_amount,
            capacity, price_per_night, style, host_unique_id, street_address_property];
        const rows = await query(sql, [inserts]);
        return rows
    } catch (err) {
        throw err;
    }
}


exports.retrieveProperties = retrieveProperties;
exports.retrieveProperty = retrieveProperty;
exports.createProperty = createProperty;