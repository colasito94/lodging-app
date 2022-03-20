const express = require('express')
const {retrieveHosts, retrieveHost, createHost, deleteHost} = require("../models/hostsModel");
const {retrieveGuests, createGuest, updateGuestPhoneNumber, deleteGuest, retrieveGuest} = require("../models/guestsModel");
const {retrieveProperties, retrieveProperty, createProperty, deleteProperty} = require("../models/propertiesModel");
const {retrieveReservations, retrieveReservation, createReservation, deleteReservation} = require("../models/reservationsModel");
const app = express()
const port = 3000
app.use(express.json());


// Retrieve Operations
// Retrieve all entities
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


// Retrieve one entity
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

app.get('/guests/:_guest_unique_id', (req, res) => {
    // Initialize condition parameter/selection criteria/filter condition
    retrieveGuest( req.params['_guest_unique_id'] )
        .then(guest => {
            res.status(200).json(guest);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

app.get('/hosts/:_host_unique_id', (req, res) => {
    // Initialize condition parameter/selection criteria/filter condition
    retrieveHost( req.params['_host_unique_id'] )
        .then(host => {
            res.status(200).json(host);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

app.get('/reservations/:_reservation_unique_id', (req, res) => {
    // Initialize condition parameter/selection criteria/filter condition
    retrieveReservation( req.params['_reservation_unique_id'] )
        .then(reservation => {
            res.status(200).json(reservation);
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

app.post('/hosts', (req, res) => {
    // Initialize condition parameter/selection criteria/filter condition
    createHost(req.body.name, req.body.phone_number, req.body.email,
        req.body.address_of_host)
        .then(host => {
            res.status(201).json(host);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

app.post('/properties', (req, res) => {
    // Initialize condition parameter/selection criteria/filter condition
    createProperty(req.body.property_name, req.body.bedroom_amount, req.body.bed_amount, req.body.bath_amount,
                   req.body.capacity, req.body.price_per_night, req.body.style, req.body.host_unique_id,
                   req.body.street_address_property)
        .then(property => {
            res.status(201).json(property);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});

app.post('/reservations', (req, res) => {
    // Initialize condition parameter/selection criteria/filter condition
    createReservation(req.body.guest_unique_id, req.body.property_unique_id,
        req.body.date_arrive, req.body.date_leave, req.body.guest_amount, req.body.total_price)
        .then(reservations => {
            res.status(201).json(reservations);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Request failed' });
        });
});


// Update Operations
app.put('/guests/:_guest_unique_id', (req, res) => {
    // Initialize condition parameter/user object to be modified
    let update_condition = {"_guest_unique_id": req.params._guest_unique_id};  // specify id of the document to be updated
    let properties_to_updated = {};  // add properties to be updated
    // guest attributes - phone_number, name, address_of_guest, email
    if (req.body.phone_number !== undefined) {
        properties_to_updated.phone_number = req.body.phone_number // Get new phone_number value from req boy
    } else {
        properties_to_updated.phone_number = null
    }
    if (req.body.name !== undefined) {
        properties_to_updated.name = req.body.name
    } else {
        properties_to_updated.name = null
    }
    if (req.body.address_of_guest !== undefined) {
        properties_to_updated.address_of_guest = req.body.address_of_guest
    } else {
        properties_to_updated.address_of_guest = null
    }
    if (req.body.email !== undefined) {
        properties_to_updated.email = req.body.email
    } else {
        properties_to_updated.email = null
    }
    // Call update CRUD function in model layer
    updateGuestPhoneNumber( update_condition, properties_to_updated )
        .then(numUpdated => {
            if (numUpdated === 1) {
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


// Delete Operations
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

app.delete('/hosts/:_host_unique_id', (req, res) => {
    deleteHost(req.params._host_unique_id)
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

app.delete('/properties/:_property_unique_id', (req, res) => {
    deleteProperty(req.params._property_unique_id)
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

app.delete('/reservations/:_reservation_unique_id', (req, res) => {
    deleteReservation(req.params._reservation_unique_id)
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