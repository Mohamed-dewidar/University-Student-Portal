import React, { Component } from 'react'
import axios from 'axios'
import HodHome from "./HodHome.component"

export default class SignleStaffDayoff extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            staffID: '',
            name: '',
            dayoff: ''
        }
    }

    onChangeID(e) {
        this.setState({
            staffID: e.target.value
        });

    }





    onSubmit(e) {
        e.preventDefault();

        const staff = {
            staffID: this.state.staffID
        }




        axios.get(`http://localhost:3000/as/viewSingleStaff/DayOFF/${staff.staffID}`,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {


                this.setState({
                    name: res.data.name,
                    dayoff: res.data.dayoff
                })

                if(res.data.msg)
                alert(res.data.msg)



            }).catch((err) => {
                alert('something went wrong')
            })



        this.setState({
            staffID: ''
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

                        <label>Staff ID </label>
                        <br></br>
                        <input type="text" required value={this.state.staffID} onChange={this.onChangeID} placeholder="enter ID"></input>
                        <br></br>

                        <button type="submit" value="add" className="btn btn-primary" > Get </button> <br />
                        <br /><br /><br /><br/><br/> <br /><br /><br /><br/><br/>
                             <br /><br />
                        <div className="container">
                        <table >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>DayOFF</th>
                                </tr>
                            </thead>
                            <tbody>
                                        <tr>
                                            <td>{this.state.name}</td>
                                            <td>{this.state.dayoff}</td>

                                        </tr>   
                            </tbody>
                        </table>
                        <br />
                    </div>
                       

                    </form>
                </div>
            </div>
        )
    }
}
