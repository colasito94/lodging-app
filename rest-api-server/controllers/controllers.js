const express = require('express')
const {retrieveHosts} = require("../models/hosts_model");
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

app.listen(port, () => {
    console.log(`Lodging app listening on port ${port}`)
})