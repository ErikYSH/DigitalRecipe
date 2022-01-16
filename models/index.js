
const mongoose = require('mongoose');

const User = require('./user');
const Food_category = require('./food_category');
const Recipe = require('./recipe');


const db = mongoose.connection;4
const dbUrl = process.env.DATABASE_URL;

const configs ={ //DOES THIS NEED TO GET UPDATED SINCE WE ARE NOT USING CONFIGS?
    useCreateIndex: true,
    useFindAndModify: false,
}

mongoose
    .connect(dbUrl)
    .then(() => {
        console.log(`MongoDB successfully connected at ${db.host}: ${db.port}! Awesome`)
    })
    .catch((err) => console.log(`MongoDB connection FAILED => Error: ${err}`));




module.exports = {
    User: require("./user"),
    Food_category: require("./food_category"),
    Recipe: require("./recipe"),
} 

