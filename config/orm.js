var connection = require("./connection.js");

var orm = {
    showTable: function (cb) {
        connection.query("SELECT * FROM burgers ", function (err, result) {
            if (err) { throw err };
            cb(result);
        });
    },

    addBurger: function (burger, cb) {
        connection.query("INSERT INTO burgers (name) VALUES (?)", burger, function (err, result) {
            if (err) { throw err };
            cb(result);
        });
    },
    // An example of objColVals would be {name: CRISPY CHICKEN, eaten: true}
    devour: function (burgerID, cb) {
        connection.query("UPDATE burgers SET devoured= true WHERE id= ?", burgerID, function (err, result) {
            if (err) { throw err };
            cb(result);
        });
    },
};

// Export the orm object for the model (burger.js).
module.exports = orm;