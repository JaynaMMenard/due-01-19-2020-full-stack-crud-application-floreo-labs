


const campus = require('./Campuses');
const students = require('./Students');

//A student belongs to a campus; A campus has meny students. 
students.belongsTo(campus);
campus.hasMany(students);

module.exports = {
    campus,
    students
}