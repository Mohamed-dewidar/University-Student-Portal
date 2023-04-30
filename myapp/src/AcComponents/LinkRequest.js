import React, { Component } from 'react'
import axios from 'axios'
import CoordinatorHome from "./CoordinatorHome"
import HodHome from "./HodHome.component"
import InstructorHome from "./InstructorHome"
import TaHome from "./TaHome"


var role = localStorage.getItem('role')

export default class LinkRequest extends Component {

    constructor(props) {
        super(props);

        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeSlotNum = this.onChangeSlotNum.bind(this)
        this.onChangeRoom = this.onChangeRoom.bind(this)
        this.onChangeCode = this.onChangeCode.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            date: '',
            slotNumber: '',
            room: '',
            courseCode: ''
        }
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });

    }
    onChangeSlotNum(e) {
        this.setState({
            slotNumber: e.target.value
        });

    }
    onChangeRoom(e) {
        this.setState({
            room: e.target.value
        });

    }

    onChangeCode(e) {
        this.setState({
            courseCode: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const link = {
            date: this.state.date,
            slotNumber: this.state.slotNumber,
            room: this.state.room,
            courseCode: this.state.courseCode

        }

        axios.post('http://localhost:3000/as/linkSlot', link,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)
            }).catch((err) => {
                alert('something went wrong')
            })
        this.setState({
            date: '',
            slotNumber: '',
            room: '',
            courseCode: ''
        })

    }

    back() {

        switch (role) {
            case 'hod': window.location = '/HodHome'; break;
            case 'instructor': window.location = '/InstructorHome'; break;
            case 'coordinator': window.location = '/CoordinatorHome'; break;
            case 'ta': window.location = '/TaHome'; break;
        }
    }




    render() {


        switch (role) {

            case 'coordinator': return (
                <div>

                    <CoordinatorHome />
                    <div className='container'>
                        <form onSubmit={this.onSubmit}>
                            <label>Date</label>
                            <br></br>
                            <input type="DATE" required value={this.state.code} onChange={this.onChangeDate} ></input>
                            <br></br>

                            <label>Slot Number</label>
                            <br></br>
                            <input type="number" required value={this.state.slotNumber} onChange={this.onChangeSlotNum} placeholder="enter slot number"></input>
                            <br></br>

                            <label>Room</label>
                            <br></br>
                            <input type="text" required value={this.state.room} onChange={this.onChangeRoom} placeholder="enter  room number"></input>
                            <br></br>

                            <label>Course Code</label>
                            <br></br>
                            <input type="text" required value={this.state.courseCode} onChange={this.onChangeCode} placeholder="enter  room number"></input>
                            <br></br>

                            <button type="submit" value="add" className="btn btn-primary" > Send </button> <br />
                        </form>
                    </div>
                </div>
            );break;


            case 'hod': return (
                <div>

                    <HodHome  />
                    <div className='container'>
                        <form onSubmit={this.onSubmit}>
                            <label>Date</label>
                            <br></br>
                            <input type="DATE" required value={this.state.code} onChange={this.onChangeDate} ></input>
                            <br></br>

                            <label>Slot Number</label>
                            <br></br>
                            <input type="number" required value={this.state.slotNumber} onChange={this.onChangeSlotNum} placeholder="enter slot number"></input>
                            <br></br>

                            <label>Room</label>
                            <br></br>
                            <input type="text" required value={this.state.room} onChange={this.onChangeRoom} placeholder="enter  room number"></input>
                            <br></br>

                            <label>Course Code</label>
                            <br></br>
                            <input type="text" required value={this.state.courseCode} onChange={this.onChangeCode} placeholder="enter  room number"></input>
                            <br></br>

                            <button type="submit" value="add" className="btn btn-primary" > Send </button> <br />
                        </form>
                    </div>
                </div>
            );break;




            case 'instructor': return (
                <div>

                    <InstructorHome  />
                    <div className='container'>
                        <form onSubmit={this.onSubmit}>
                            <label>Date</label>
                            <br></br>
                            <input type="DATE" required value={this.state.code} onChange={this.onChangeDate} ></input>
                            <br></br>

                            <label>Slot Number</label>
                            <br></br>
                            <input type="number" required value={this.state.slotNumber} onChange={this.onChangeSlotNum} placeholder="enter slot number"></input>
                            <br></br>

                            <label>Room</label>
                            <br></br>
                            <input type="text" required value={this.state.room} onChange={this.onChangeRoom} placeholder="enter  room number"></input>
                            <br></br>

                            <label>Course Code</label>
                            <br></br>
                            <input type="text" required value={this.state.courseCode} onChange={this.onChangeCode} placeholder="enter  room number"></input>
                            <br></br>

                            <button type="submit" value="add" className="btn btn-primary" > Send </button> <br />
                        </form>
                    </div>
                </div>
            );break;



            case 'ta': return (
                <div>

                    <TaHome  />
                    <div className='container'>
                        <form onSubmit={this.onSubmit}>
                            <label>Date</label>
                            <br></br>
                            <input type="DATE" required value={this.state.code} onChange={this.onChangeDate} ></input>
                            <br></br>

                            <label>Slot Number</label>
                            <br></br>
                            <input type="number" required value={this.state.slotNumber} onChange={this.onChangeSlotNum} placeholder="enter slot number"></input>
                            <br></br>

                            <label>Room</label>
                            <br></br>
                            <input type="text" required value={this.state.room} onChange={this.onChangeRoom} placeholder="enter  room number"></input>
                            <br></br>

                            <label>Course Code</label>
                            <br></br>
                            <input type="text" required value={this.state.courseCode} onChange={this.onChangeCode} placeholder="enter  room number"></input>
                            <br></br>

                            <button type="submit" value="add" className="btn btn-primary" > Send </button> <br />
                        </form>
                    </div>
                </div>
            );break;


        }
    }
}
