import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            studentsState: []
        }
    }

    sendStudentId(id){
        console.log(id);
        this.props.deleteStudentById(id);
    }

    render() {
        const cardWidth = {
            width: '18rem'
        };

        let studentList = this.props.student.map(student =>{
            return (
                <div key={student.id} className="card" style={cardWidth}>
                    <div className="card-header">
                        <b>Name: {student.name}</b>
                        <button className="btn btn-danger float-right" onClick={this.sendStudentId.bind(this, student.id)}>Delete</button>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Email: {student.email}</b></li>
                        <li className="list-group-item"><b>Course: {student.course}</b></li>
                        <li className="list-group-item"><b>Level: {student.level}</b></li>
                        <li className="list-group-item"><b>Grade: {student.grade}</b></li>
                    </ul>
                </div>
            );
        });

        return (
            <div>
                {studentList}
            </div>
        );
    }
}

export default App;
