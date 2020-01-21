


//importing models to database and main app 

const db = require('./db');

require("./Models/Associations");
require("./Models/Campuses");
require("./Models/Students");

module.exports = db;