import axios from 'axios';
import React, { Component } from 'react'
import HrHome from "../HrComponents/HrHome.component"
import HodHome from "../AcComponents/HodHome.component"
import CoordinatorHome from "../AcComponents/CoordinatorHome"
import InstructorHome from "../AcComponents/InstructorHome"
import TaHome from "../AcComponents/TaHome"

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            id: '',
            email: '',
            firstName: '',
            lastName: '',
            salary: 0
        }
    }

    componentDidMount() {

        if (localStorage.getItem('role') === 'hr')
            axios.get('http://localhost:3000/hr/viewProfile',
                { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res =>
                    this.setState({
                        email: res.data.email,
                        id: res.data.id,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        salary: res.data.salary

                    }))
        else {
            axios.get('http://localhost:3000/as/viewProfile',
                { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res =>
                    this.setState({
                        email: res.data.email,
                        id: res.data.id,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        salary: res.data.salary

                    }))
        }





    }


    render() {

        if (localStorage['role'] === 'hr')
            return (

                <div>
                    <HrHome />
                    <div className='container'>

                        <div className="container">
                            <table>
                                <thead>
                                    <tr>

                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.id}</td>
                                        <td>{this.state.email}</td>
                                        <td>{this.state.firstName}</td>
                                        <td>{this.state.lastName}</td>
                                        <td>{this.state.salary}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )


        if (localStorage['role'] === 'hod')
            return (

                <div>
                    <HodHome />
                    <div className='container'>
                    <div className="container">
                            <table>
                                <thead>
                                    <tr>

                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.id}</td>
                                        <td>{this.state.email}</td>
                                        <td>{this.state.firstName}</td>
                                        <td>{this.state.lastName}</td>
                                        <td>{this.state.salary}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )


        if (localStorage['role'] === 'coordinator')
            return (

                <div>
                    <CoordinatorHome />
                    <div className='container'>
                    <div className="container">
                            <table className="container">
                                <thead>
                                    <tr>

                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.id}</td>
                                        <td>{this.state.email}</td>
                                        <td>{this.state.firstName}</td>
                                        <td>{this.state.lastName}</td>
                                        <td>{this.state.salary}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )


        if (localStorage['role'] === 'instructor')
            return (

                <div>
                    <InstructorHome />
                    <div className='container'>
                    <div className="container">
                            <table>
                                <thead>
                                    <tr>

                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.id}</td>
                                        <td>{this.state.email}</td>
                                        <td>{this.state.firstName}</td>
                                        <td>{this.state.lastName}</td>
                                        <td>{this.state.salary}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )


        if (localStorage['role'] === 'ta')
            return (

                <div>
                    <TaHome />
                    <div className='container'>
                    <div className="container">
                            <table>
                                <thead>
                                    <tr>

                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.id}</td>
                                        <td>{this.state.email}</td>
                                        <td>{this.state.firstName}</td>
                                        <td>{this.state.lastName}</td>
                                        <td>{this.state.salary}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    }
}
