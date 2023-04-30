import React, { Component } from 'react'
import axios from 'axios'
import Drawer from '@material-ui/core/Drawer';

import HodHome from "./HodHome.component"


var result = []

export default class ViewRequests extends Component {
    constructor(props) {
        super(props);

        this.back = this.back.bind(this)


        this.state = {
            array: []

        }
    }

    componentDidMount() {


        axios.get('http://localhost:3000/as/viewStaffRequests',
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {


                result = res.data.requests




                this.setState({
                    array: result
                })




            }).catch((err) => {
                alert(err)
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

                    <div className="container">

                        <table >
                            <thead>
                                <tr >
                                    <th>Status</th>
                                    <th>Type</th>
                                    <th>Staff ID</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                {
                                    this.state.array.map(ele => (
                                        <tr  >
                                            <td>{ele.status}</td>
                                            <td>{ele.requestType}</td>
                                            <td>{ele.requestorID}</td>
                                            <td>{ele.gender}</td>

                                        </tr>
                                    ))
                                }
                               
                            </tbody>
                            
                        </table>


                    </div>

                </div>
            </div>
        )
    }
}
