import React, {Component} from 'react';
import StudentCard from './StudentCard.js';


 class StudentGrid extends Component {

 	render(){
 		return (
 			<div className="studentsPage">
 			
				    {this.props.students.map(student => (
                		<StudentCard student={student}/>
              		))}
 				
 			</div>
 		);
 	}
 }


export default StudentGrid;
