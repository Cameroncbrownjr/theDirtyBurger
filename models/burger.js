// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.showTable(function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    add: function (burgerName,cb) {
        orm.addBurger(burgerName, function (res) {
            cb(res);
        });
    },
    devour: function (burgerId,cb) {
        orm.devour(burgerId, function (res) {
            cb(res);
        }); 
    },
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;