var express = require("express");

var router = express.Router();

var burger = require('../models/burger.js')


router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject)
        res.render("index", burgerObject);
    })
});

router.post("/api/burger", function (req, res) {
    burger.add(req.body.burger, function (result) {
        res.json({ id: result.insertId })
    })
});

router.put("/api/burger/:id", function (req, res) {
    burger.devour(req.params.id, function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    }
    );
});



module.exports = router;


