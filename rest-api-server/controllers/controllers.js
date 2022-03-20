const express = require('express')
const {retrieveHosts} = require("../models/hostsModel");
const {retrieveGuests, createGuest} = require("../models/guestsModel");
const {retrieveProperties, retrieveProperty} = require("../models/propertiesModel");
const {retrieveReservations} = require("../models/reservationsModel");
const app = express()
const port = 3000
app.use(express.json());

// Retrieve Operations
app.get('/hosts', (req, res) => {
    retrieveHosts()
        .then(hosts => {
            res.status(200).json(hosts);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

app.get('/guests', (req, res) => {
    retrieveGuests()
        .then(guests => {
            res.status(200).json(guests);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

app.get('/properties', (req, res) => {
    retrieveProperties()
        .then(properties => {
            res.status(200).json(properties);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

app.get('/reservations', (req, res) => {
    retrieveReservations()
        .then(reservations => {
            res.status(200).json(reservations);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

app.get('/properties/:_property_unique_id', (req, res) => {
    // Initialize condition parameter/selection criteria/filter condition
    retrieveProperty( req.params['_property_unique_id'] )
        .then(property => {
            res.status(200).json(property);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

// Create Operations
app.post('/guests', (req, res) => {
    // Initialize condition parameter/selection criteria/filter condition
    createGuest(req.body.phone_number, req.body.name, req.body.address_of_guest,
        req.body.email)
        .then(guest => {
            res.status(201).json(guest);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

app.listen(port, () => {
    console.log(`Lodging app listening on port ${port}`)
})