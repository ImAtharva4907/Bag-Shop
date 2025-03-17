const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env

const dbgr = require('debug')("development: mongoose");

mongoose.connect(`${process.env.MONGODB_URI}/scatch`)
    .then(function() {
        dbgr("connected");
    })
    .catch(function(err) {
        dbgr(err);
    });

module.exports = mongoose.connection;
