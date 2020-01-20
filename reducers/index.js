import {combineReducers} from 'redux';

let campuses = [];

let students = [];

// This value will be used to assign an ID to new students.
// After each student addition, this value increments, and its value never derceases

let curStudentId = 1;


const campusesReducer = (oldListofCampus = campuses, action) => {
    let newListOfCampus = oldListofCampus;
	switch(action.type) {
		case "ADD_CAMPUS":
			return oldListofCampus.concat(action.payload);
		case "REMOVE_CAMPUS":
            return oldListofCampus.filter(Campus => (Campus.id !== action.payload.id));
        case "EDIT_CAMPUS":
            for (let i = 0; i < newListOfCampus.length; i++) {
                if (newListOfCampus[i].id == action.payload.id) {
                    newListOfCampus[i] = action.payload;
                }
            }
            return newListOfCampus;
        case "EMPTY_CAMPUS":
            return [];
		default:
			return oldListofCampus;
	}
};
