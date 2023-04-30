import React, { Component } from 'react'
import axios from 'axios'

import HrHome from "./HrHome.component"

export default class UpdateCourse extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeNewName = this.onChangeNewName.bind(this)
        this.onChangeFaculty = this.onChangeFaculty.bind(this)
        this.onChangeDepartment = this.onChangeDepartment.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            code: '',
            newCode: '',
            departmentName: '',
            facultyName: ''
        }
    }

    onChangeName(e) {
        this.setState({
            code: e.target.value
        });

    }

    onChangeNewName(e) {
        this.setState({
            newCode: e.target.value
        });

    }
    onChangeFaculty(e) {
        this.setState({
            facultyName: e.target.value
        });

    }
    onChangeDepartment(e) {
        this.setState({
            departmentName: e.target.value
        });

    }

    onSubmit(e) {
        e.preventDefault();

        const course = {
            code: this.state.code,
            newCode: this.state.newCode,
            departmentName: this.state.departmentName,
            facultyName: this.state.facultyName

        }

        axios.put('http://localhost:3000/hr/updatecoursecode', course,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)
            }).catch((err) => {
                alert('something went wrong')
            })
        this.setState({
            code: '',
            newCode: '',
            departmentName: '',
            facultyName: ''
        })

    }

    back() {
        window.location = '/hrhome'
    }



    render() {
        return (
            <div>
                <HrHome />
                <div className='container'>
                    <form onSubmit={this.onSubmit}>
                        <label>Course Code </label>
                        <br></br>
                        <input type="text" required value={this.state.code} onChange={this.onChangeName} placeholder="enter code"></input>
                        <br></br>

                        <label>New Code </label>
                        <br></br>
                        <input type="text" required value={this.state.newCode} onChange={this.onChangeNewName} placeholder="enter new code"></input>
                        <br></br>

                        <label>Department name </label>
                        <br></br>
                        <input type="text" required value={this.state.departmentName} onChange={this.onChangeDepartment} placeholder="enter department"></input>
                        <br></br>

                        <label>Faculty</label>
                        <br></br>
                        <input type="text" required value={this.state.facultyName} onChange={this.onChangeFaculty} placeholder="enter faculty name"></input>
                        <br></br>

                        <button type="submit" value="add" className="btn btn-primary" > Update </button> <br />

                    </form>
                </div>

            </div>
        )
    }
}
