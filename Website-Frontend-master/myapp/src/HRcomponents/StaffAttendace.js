import React, { Component } from 'react'
import axios from 'axios'
import HrHome from "./HrHome.component"


export default class StaffAttendace extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            staffId: '',
            attendace: ''
        }
    }

    onChangeID(e) {
        this.setState({
            staffId: e.target.value
        });

    }





    onSubmit(e) {
        e.preventDefault();

        const staff = {
            staffId: this.state.staffId
        }




        axios.get(`http://localhost:3000/hr/StaffMemberAttendace/${staff.staffId}`,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {

                if (res.data.attendace)
                    this.setState({
                        attendace: res.data.attendace
                    })

                else
                    alert(res.data.msg)

            }).catch((err) => {
                alert('something went wrong')
            })



        this.setState({
            staffId: ''
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
                        <label>Staff ID </label>
                        <br></br>
                        <input type="text" required value={this.state.staffId} onChange={this.onChangeID} placeholder="enter ID"></input>
                        <br></br>


                        <button type="submit" value="add" className="btn btn-primary" > Get </button> <br />
                        <br /><br /><br />
                        {this.state.attendace}


                    </form>
                </div>
            </div>
        )
    }
}
