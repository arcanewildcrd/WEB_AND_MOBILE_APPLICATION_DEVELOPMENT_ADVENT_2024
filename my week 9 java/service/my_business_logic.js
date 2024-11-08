
const myDB = require('../models/myDB');


const getStudents = () => { 
    return students;
}

const getStudentById = (request) =>{
    // Implement logic to fetch student data from the database
    for (i = 1; i < 5; i++) {
        if (request.params.studentId == myDB.students[i].id) {
            
            return students[i];
        }

        console.log(students[i]);

    }

    return null;
    module.export = (getStudents, getStudentById);
}