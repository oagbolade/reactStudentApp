import React, { Component } from 'react';
import GetIndividualStudent from './GetIndividualStudent';
import AddStudent from './AddStudent';

class App extends Component {
    constructor(){
        super();
        this.state = {
            studentsState: [
                {
                    id: 1,
                    name: 'john',
                    email: 'john@gmail.com',
                    course: 'biology',
                    level: '200',
                    'grade': 60
                },
                {
                    id: 2,
                    name: 'Adam',
                    email: 'adam@gmail.com',
                    course: 'biology',
                    level: '300',
                    'grade': 100
                },
                {
                    id: 3,
                    name: 'Abigail',
                    email: 'abigail@gmail.com',
                    course: 'engineering',
                    level: '500',
                    'grade': 70
                }
            ]
        };
    }

    getFormData(formData){
        this.state.studentsState.push(formData);
        this.setState({studentsState: this.state.studentsState});
    }

    deleteStudent(id){
        this.state.studentsState.filter((studentId)=> studentId.id !== id);
        this.setState({
            studentsState: this.state.studentsState.filter((studentId)=> studentId.id !== id)
        });
    }

    render() {
        const cardWidth = {
            width: '18rem'
        };

        return (
            <div className="container">
                <div>
                    <h1 className="me">View Students Page</h1>
                </div>
                <div className="col-12">
                    <div className="col-6">
                        <GetIndividualStudent deleteStudentById={this.deleteStudent.bind(this)} student={this.state.studentsState}  />
                    </div>
                    <div className="col-3">
                        <AddStudent formAddStudent={this.getFormData.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
