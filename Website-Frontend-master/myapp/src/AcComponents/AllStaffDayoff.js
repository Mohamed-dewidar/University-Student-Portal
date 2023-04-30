import React, { Component } from 'react'
import axios from 'axios'

import HodHome from "./HodHome.component"


export default class AllStaffDayoff extends Component {

    constructor(props) {
        super(props);


        this.back = this.back.bind(this)

        this.state = {
            array: []

        }
    }

    componentDidMount() {


        axios.get('http://localhost:3000/as/viewAllStaffDayOFF',
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {





                this.setState({
                    array: res.data.array
                })

                // alert('here')
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
                                <tr>
                                    <th>Name</th>
                                    <th>DayOFF</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.array.map(ele => (
                                        <tr>
                                            <td>{ele.name}</td>
                                            <td>{ele.dayoff}</td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}
