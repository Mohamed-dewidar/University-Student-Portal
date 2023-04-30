import React, { Component } from 'react'
import axios from 'axios'
import CoordinatorHome from "./CoordinatorHome"
export default class UpdateCourseSlot extends Component {
    constructor(props) {
        super(props);

        this.onChangeCode = this.onChangeCode.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeSlotNum = this.onChangeSlotNum.bind(this)
        this.onChangeType = this.onChangeType.bind(this)
        this.onChangeRoom = this.onChangeRoom.bind(this)
        this.onChangeNewDate = this.onChangeNewDate.bind(this)
        this.onChangeNewSlot = this.onChangeNewSlot.bind(this)
        this.onChangeNewRoom = this.onChangeNewRoom.bind(this)
        this.onChangeNewType = this.onChangeNewType.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            courseCode: '',
            deletedDate: '',
            deletedSlotNumber: '',
            deletedRoom: '',
            deletedType: '',
            addedDate: '',
            addedSlotNumber: '',
            addedRoom: '',
            addedType: ''
        }
    }

    onChangeCode(e) {
        this.setState({
            courseCode: e.target.value
        });

    }
    onChangeDate(e) {
        this.setState({
            deletedDate: e.target.value
        });

    }
    onChangeSlotNum(e) {
        this.setState({
            deletedSlotNumber: e.target.value
        });

    }

    onChangeRoom(e) {
        this.setState({
            deletedRoom: e.target.value
        });

    }
    onChangeType(e) {
        this.setState({
            deletedType: e.target.value
        });

    }

    onChangeNewDate(e) {
        this.setState({
            addedDate: e.target.value
        });

    }

    onChangeNewSlot(e) {
        this.setState({
            addedSlotNumber: e.target.value
        });

    }
    onChangeNewRoom(e) {
        this.setState({
            addedRoom: e.target.value
        });

    }
    onChangeNewType(e) {
        this.setState({
            addedType: e.target.value
        });

    }


    onSubmit(e) {
        e.preventDefault();

        const slot = {
            courseCode: this.state.courseCode,
            deletedDate: this.state.deletedDate,
            deletedSlotNumber: this.state.deletedSlotNumber,
            deletedRoom: this.state.deletedRoom,
            deletedType: this.state.deletedType,
            addedDate: this.state.addedDate,
            addedSlotNumber: this.state.addedSlotNumber,
            addedRoom: this.state.addedRoom,
            addedType: this.state.addedType,

        }

        axios.put('http://localhost:3000/as/updateCourseSlot', slot,
            { headers: { authtoken: localStorage['authtoken'] } }).then(res => {
                alert(res.data.msg)
            }).catch((err) => {
                alert('something went wrong')
            })

        this.setState({
            courseCode: '',
            deletedDate: '',
            deletedSlotNumber: '',
            deletedRoom: '',
            deletedType: '',
            addedDate: '',
            addedSlotNumber: '',
            addedRoom: '',
            addedType: ''
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
                        <input type="number" required value={this.state.deletedSlotNumber} onChange={this.onChangeSlotNum} ></input>
                        <br></br>

                        <label>Date</label>
                        <br></br>
                        <input type="DATE" required value={this.state.deletedDate} onChange={this.onChangeDate} ></input>
                        <br></br>

                        <label>Room</label>
                        <br></br>
                        <input type="text" required value={this.state.deletedRoom} onChange={this.onChangeRoom} placeholder="enter room "></input>
                        <br></br>

                        <label>Type</label>
                        <br></br>
                        <input type="text" required value={this.state.deletedType} onChange={this.onChangeType} placeholder="enter slot type "></input>
                        <br></br>
                        <label> New Slot Number </label>
                        <br></br>
                        <input type="number" required value={this.state.addedSlotNumber} onChange={this.onChangeNewSlot} ></input>
                        <br></br>

                        <label>Date</label>
                        <br></br>
                        <input type="DATE" required value={this.state.addedDate} onChange={this.onChangeNewDate} ></input>
                        <br></br>

                        <label>Room</label>
                        <br></br>
                        <input type="text" required value={this.state.addedRoom} onChange={this.onChangeNewRoom} placeholder="enter room "></input>
                        <br></br>

                        <label>Type</label>
                        <br></br>
                        <input type="text" required value={this.state.addedType} onChange={this.onChangeNewType} placeholder="enter slot type "></input>
                        <br></br>


                        <button type="submit" value="add" className="btn btn-primary" > Update </button> <br />



                    </form>

                </div>

            </div>
        )
    }
}
