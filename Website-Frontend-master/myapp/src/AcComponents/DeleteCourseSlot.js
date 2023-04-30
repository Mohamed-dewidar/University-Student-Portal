import React, { Component } from 'react'
import axios from 'axios'
import CoordinatorHome from "./CoordinatorHome"

export default class DeleteCourseSlot extends Component {
    constructor(props) {
        super(props);

        this.onChangeCode = this.onChangeCode.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeSlotNum = this.onChangeSlotNum.bind(this)
        this.onChangeType = this.onChangeType.bind(this)
        this.onChangeRoom = this.onChangeRoom.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            courseCode: '',
            date: '',
            slotNumber: '',
            room: '',
            type: ''
        }
    }

    onChangeCode(e) {
        this.setState({
            courseCode: e.target.value
        });

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
    onChangeType(e) {
        this.setState({
            type: e.target.value
        });

    }


    onSubmit(e) {
        e.preventDefault();

        const slot = {
            courseCode: this.state.courseCode,
            date: this.state.date,
            slotNumber: this.state.slotNumber,
            room: this.state.room,
            type: this.state.type

        }

        axios.post('http://localhost:3000/as/deleteCourseSlot', slot,
            { headers: { authtoken: localStorage['authtoken'] } }).then(res => {
                alert(res.data.msg)
            }).catch((err) => {
                alert('something went wrong')
            })

        this.setState({
            courseCode: '',
            date: '',
            slotNumber: '',
            room: '',
            type: ''
        })

    }

    back() {
        window.location = '/CoordinatorHome'
    }



    render() {
        return (
            <div>
                <CoordinatorHome />
                <div className='container'>
                    <form onSubmit={this.onSubmit}>

                        <label>Course Code</label>
                        <br></br>
                        <input type="text" required value={this.state.courseCode} onChange={this.onChangeCode} placeholder="enter code" />
                        <br></br>

                        <label>Slot Number </label>
                        <br></br>
                        <input type="number" required value={this.state.slotNumber} onChange={this.onChangeSlotNum} ></input>
                        <br></br>

                        <label>Date</label>
                        <br></br>
                        <input type="DATE" required value={this.state.date} onChange={this.onChangeDate} ></input>
                        <br></br>

                        <label>Room</label>
                        <br></br>
                        <input type="text" required value={this.state.room} onChange={this.onChangeRoom} placeholder="enter room "></input>
                        <br></br>

                        <label>Type</label>
                        <br></br>
                        <input type="text" required value={this.state.type} onChange={this.onChangeType} placeholder="enter slot type "></input>
                        <br></br>

                        <button type="submit" value="add" className="btn btn-primary" > Delete </button> <br />



                    </form>

                </div>

            </div>
        )
    }
}
