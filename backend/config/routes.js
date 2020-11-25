const express = require('express');
const routes = express.Router();

let db = require('../db.json');

routes.get('/', (req, res) => {
    return res.json(db);
});

routes.post('/addUser', (req, res) => {
    const user = req.body;

    if (!user) {
        return res.status(400).end();
    } else {
        db.push(user);
        return res.json(user);
    }
});

routes.delete('/:id', (req, res) => {
    const id = req.params.id;

    let newDb = db.filter(item => {
        if (!item[id]) {
            return item;
        }
        db = newDb;
        return res.send(newDb);
    });

});


module.exports = routes;