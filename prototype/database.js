// to store the details of the MongoDB database cluster beig used for this project 
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://adi:admin@cutopiacluster.xnzpe.mongodb.net/CUtopiaDB?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
            console.log("database connection failed "+err);
        })
    }
}

module.exports = new Database();
