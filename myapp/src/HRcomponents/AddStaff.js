import React, { Component } from 'react'
import axios from 'axios'
import HrHome from "./HrHome.component"

export default class AddStaff extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeFName = this.onChangeFName.bind(this)
        this.onChangeLName = this.onChangeLName.bind(this)
        this.onChangeSalary = this.onChangeSalary.bind(this)
        this.onChangeOffice = this.onChangeOffice.bind(this)
        this.onChangeRole = this.onChangeRole.bind(this)
        this.onChangeGender = this.onChangeGender.bind(this)
        this.onChangeFaculty = this.onChangeFaculty.bind(this)
        this.onChangeDepartment = this.onChangeDepartment.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            email: '',
            fName: '',
            lName: '',
            salary: '',
            office: '',
            role: '',
            gender: '',
            facultyName: '',
            departmentName: ''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });

    }

    onChangeFName(e) {
        this.setState({
            fName: e.target.value
        });

    }

    onChangeLName(e) {
        this.setState({
            lName: e.target.value
        });

    }

    onChangeSalary(e) {
        this.setState({
            salary: e.target.value
        });

    }

    onChangeOffice(e) {
        this.setState({
            office: e.target.value
        });

    }

    onChangeRole(e) {
        this.setState({
            role: e.target.value
        });

    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
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

        const staff = {
            email: this.state.email,
            fName: this.state.fName,
            lName: this.state.lName,
            salary: this.state.salary,
            office: this.state.office,
            role: this.state.role,
            gender: this.state.gender,
            facultyName: this.state.facultyName,
            departmentName: this.state.departmentName
        }

        axios.post('http://localhost:3000/hr/adduser', staff,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)
            }).catch((err) => {
                alert('something went wrong')
            })

        this.setState({
            email: '',
            fName: '',
            lName: '',
            salary: '',
            office: '',
            role: '',
            gender: '',
            facultyName: '',
            departmentName: ''
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

                        <label>Email</label>
                        <br></br>
                        <input type="text" required value={this.state.email} onChange={this.onChangeEmail} placeholder="enter staff email"></input>
                        <br></br>

                        <label>First Name</label>
                        <br></br>
                        <input type="text" required value={this.state.fName} onChange={this.onChangeFName} placeholder="enter first name"></input>
                        <br></br>

                        <label>Last Name</label>
                        <br></br>
                        <input type="text" required value={this.state.lName} onChange={this.onChangeLName} placeholder="enter last name"></input>
                        <br></br>

                        <label>Salary</label>
                        <br></br>
                        <input type="number" required value={this.state.salary} onChange={this.onChangeSalary} placeholder="enter salary"></input>
                        <br></br>

                        <label>Office</label>
                        <br></br>
                        <input type="text" required value={this.state.office} onChange={this.onChangeOffice} placeholder="enter office location"></input>
                        <br></br>

                        <label>Role</label>
                        <br></br>
                        <input type="text" required value={this.state.role} onChange={this.onChangeRole} placeholder="enter role"></input>
                        <br></br>

                        <label>Gender</label>
                        <br></br>
                        <input type="text" required value={this.state.gender} onChange={this.onChangeGender} placeholder="enter gender"></input>
                        <br></br>





                        <label>Faculty</label>
                        <br></br>
                        <input type="text" required value={this.state.facultyName} onChange={this.onChangeFaculty} placeholder="enter faculty name"></input>
                        <br></br>

                        <label>Department name </label>
                        <br></br>
                        <input type="text" required value={this.state.departmentName} onChange={this.onChangeDepartment} placeholder="enter department"></input>
                        <br></br>



                        <button type="submit" value="home" onClick={this.onSubmit} className="btn btn-primary" > Add </button>

                    </form>
                </div>
            </div>
        )
    }
}
