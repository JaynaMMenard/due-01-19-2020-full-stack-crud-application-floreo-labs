

const Sequelize = require('sequelize');
const databaseName = "postgres";

console.log('Database connected!');

const db = new Sequelize(databaseName, 'postgres', 'donatello57', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    },
    logging: false
  });

module.exports = db;