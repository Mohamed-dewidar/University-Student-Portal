import React, { Component } from 'react'
import axios from 'axios'

import InstructorHome from "./InstructorHome"
var role

export default class SlotAssignment extends Component {
    constructor(props) {
        super(props);

        this.onChangeCode = this.onChangeCode.bind(this)

        this.onChangeID = this.onChangeID.bind(this)
        this.onChangeSlot = this.onChangeSlot.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeRoom = this.onChangeRoom.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            courseCode: '',
            staffID: '',
            slotNum: '',
            Date: '',
            room: ''
        }
    }

    onChangeCode(e) {
        this.setState({
            courseCode: e.target.value
        });

    }

    onChangeID(e) {
        this.setState({
            staffID: e.target.value
        });

    }
    onChangeSlot(e) {
        this.setState({
            slotNum: e.target.value
        });

    }
    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        });

    }
    onChangeRoom(e) {
        this.setState({
            room: e.target.value
        });

    }

    onSubmit(e) {
        e.preventDefault();

        const inst = {
            courseCode: this.state.courseCode,
            staffID: this.state.staffID,
            slotNum: this.state.slotNum,
            Date: this.state.Date,
            room: this.state.room

        }




        axios.post('http://localhost:3000/as/InstructorAssginSlot', inst,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)
            }).catch((err) => {
                alert('something went wrong')
            })
        this.setState({
            courseCode: '',
            staffID: '',
            slotNum: '',
            Date: '',
            room: ''
        })

    }

    back() {
        role = localStorage.getItem('role')
        switch (role) {

            case 'instructor': window.location = '/InstructorHome'; break;

        }
    }




    render() {
        return (
            <div>

                <InstructorHome />
                <div className='container'>




                    <form onSubmit={this.onSubmit}>


                        <br />


                        <label>Course Code</label>
                        <br />
                        <input type="text" required value={this.state.courseCode} onChange={this.onChangeCode} placeholder="enter code"></input>
                        <br></br><br></br>

                        <label>Staff ID</label>
                        <br></br>
                        <input type="text" value={this.state.staffID} onChange={this.onChangeID} placeholder="enter ID"></input>
                        <br></br>

                        <label>Slot Number</label>
                        <br></br>
                        <input type="number" required value={this.state.slotNum} onChange={this.onChangeSlot} placeholder="enter slot number"></input>
                        <br></br>

                        <label>Date</label>
                        <br></br>
                        <input type="DATE" required value={this.state.Date} onChange={this.onChangeDate} ></input>
                        <br></br><br></br>


                        <label>Room</label>
                        <br />
                        <input type="text" required value={this.state.room} onChange={this.onChangeRoom} placeholder="enter room number" ></input>
                        <br></br><br></br>


                        <button type="submit" value="add" className="btn btn-primary" > Send </button> <br />


                    </form>

                </div>
            </div>
        )
    }
}
