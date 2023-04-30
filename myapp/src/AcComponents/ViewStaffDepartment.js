import React, { Component } from 'react'
import axios from 'axios'
import HodHome from "./HodHome.component"
import InstructorHome from "./InstructorHome"


var result = []
var role = localStorage.getItem('role')
export default class ViewStaffDepartment extends Component {


    constructor(props) {
        super(props);

        this.back = this.back.bind(this)


        this.state = {
            array: []

        }
    }

    componentDidMount() {


        axios.get('http://localhost:3000/as/viewAllStaff',
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {


                result = res.data.array

                if (result)
                    this.setState({
                        array: result
                    })
                else
                    alert(res.data.msg)


            }).catch((err) => {
                alert(err)
            })

    }


    back() {

        switch (role) {
            case 'hod': window.location = '/HodHome'; break;
            case 'instructor': window.location = '/InstructorHome'; break;

        }
    }

    render() {

        switch (role) {

            case 'hod': return (
                <div>
                    <HodHome />
                    <div className='container'>
                        <div className="container">
                            <table >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.array.map(ele => (
                                            <tr>
                                                <td>{ele.name}</td>
                                                <td>{ele.email}</td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <br />
                        </div>
                    </div>
                </div>
            ); break;



             
            case 'instructor': return (
                <div>
                    <InstructorHome />
                    <div className='container'>
                        <div className="container">
                            <table >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.array.map(ele => (
                                            <tr>
                                                <td>{ele.name}</td>
                                                <td>{ele.email}</td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <br />
                        </div>
                    </div>
                </div>
            ); break;
        }

    }
}
