const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
const connectDB = function (dbURL) {
    mongoose.connect(dbURL, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database.', err);
        process.exit();
    });
}


module.exports = connectDB;