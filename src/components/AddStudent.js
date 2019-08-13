import React, { Component } from 'react';
import './mystyle.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            newStudent: {}

        }
    }
    addStudent(e){
        e.preventDefault();
        let x = Math.random();
        console.log(this.refs.email.value);
        this.setState({
            newStudent: {
                id: x,
                name: this.refs.name.value,
                email: this.refs.email.value,
                course: this.refs.level.value,
                level: this.refs.course.value,
                grade: this.refs.grade.value
            }
        }, ()=>{
            this.props.formAddStudent(this.state.newStudent);
        });

    }

    render() {
        return (
            <div>
                <form onSubmit={this.addStudent.bind(this)}>
                    <div>
                        <label>Name: <input type="text" ref="name" /></label>
                    </div>
                    <div>
                        <label>Email: <input type="email" ref="email" /></label>
                    </div>
                    <div>
                        <label>Level: <input type="number" ref="level" /></label>
                    </div>
                    <div>
                        <label>Course: <input type="text" ref="course" /></label>
                    </div>
                    <div>
                        <label>Grade: <input type="number" ref="grade" /></label>
                    </div>
                    <div>
                        <input type="submit" value="Add"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default App;