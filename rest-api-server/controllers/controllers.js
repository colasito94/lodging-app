const express = require('express')
const {retrieveHosts} = require("../models/hostsModel");
const {retrieveGuests, createGuest, updateGuestPhoneNumber, deleteGuest} = require("../models/guestsModel");
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

// Update Operations
app.put('/guests/:_guest_unique_id', (req, res) => {
    // Initialize condition parameter/user object to be modified
    let updated_condition = {"_guest_unique_id": req.params._guest_unique_id};  // specify id of the document to be updated
    let property_to_updated = {};  // add properties to be updated
    if (req.body.phone_number !== undefined) {
        property_to_updated.phone_number = req.body.phone_number // Get new phone_number value from req boy
    }
    // Call update CRUD function in model layer
    updateGuestPhoneNumber( updated_condition, property_to_updated )
        .then(phoneNumberUpdated => {
            if (phoneNumberUpdated === 1) {
                res.status(200).send();
                //TODO Fix this, maybe return JSON object to return updated tuple?
                // res.json({_guest_unique_id: req.params._guest_unique_id, phone_number: req.body.phone_number,
                //     name: req.body.name, address_of_guest: req.body.address_of_guest,
                //     email: req.body.email});
            } else {
                res.status(500).json({Error: 'Resource not found'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

// DELETE Operations
app.delete('/guests/:_guest_unique_id', (req, res) => {
    deleteGuest(req.params._guest_unique_id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(500).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

app.listen(port, () => {
    console.log(`Lodging app listening on port ${port}`)
})