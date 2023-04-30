import React, { Component } from 'react'
import axios from 'axios'
import HodHome from "./HodHome.component"

export default class DeleteInstructor extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this)
        this.onChangeCode = this.onChangeCode.bind(this)
        this.onChangeFaculty = this.onChangeFaculty.bind(this)
        this.onChangeDepartment = this.onChangeDepartment.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            instructorID: '',
            courseCode: '',
            departmentName: '',
            facultyName: ''
        }
    }

    onChangeID(e) {
        this.setState({
            instructorID: e.target.value
        });

    }

    onChangeCode(e) {
        this.setState({
            courseCode: e.target.value
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

        const inst = {
            instructorID: this.state.instructorID,
            courseCode: this.state.courseCode,
            departmentName: this.state.departmentName,
            facultyName: this.state.facultyName
        }

        axios.post('http://localhost:3000/as/deleteInstructor', inst,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)
            }).catch((err) => {
                //alert('something went wrong')
            })
        this.setState({
            instructorID: '',
            courseCode: '',
            departmentName: '',
            facultyName: ''
        })

    }

    back() {
        window.location = '/hodhome'
    }



    render() {
        return (
            <div>
                <HodHome />
                <div className='container'>


                    <form onSubmit={this.onSubmit}>

                        <label>Instructor ID </label>
                        <br></br>
                        <input type="text" required value={this.state.instructorID} onChange={this.onChangeID} placeholder="enter ID"></input>
                        <br></br>

                        <label>Course Code</label>
                        <br></br>
                        <input type="text" required value={this.state.courseCode} onChange={this.onChangeCode} placeholder="enter code"></input>
                        <br></br>

                        <label>Faculty  </label>
                        <br></br>
                        <input type="text" required value={this.state.facultyName} onChange={this.onChangeFaculty} placeholder="enter faculty name"></input>
                        <br></br>

                        <label>Department Name </label>
                        <br></br>
                        <input type="text" required value={this.state.departmentName} onChange={this.onChangeDepartment} placeholder="enter department name"></input>
                        <br></br>



                        <button type="submit" value="add" className="btn btn-primary" > Delete </button> <br />



                    </form>
                </div>
            </div>
        )
    }
}
