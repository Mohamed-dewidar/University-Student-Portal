import React, { Component } from 'react'
import axios from 'axios'
import CoordinatorHome from "./CoordinatorHome"
import HodHome from "./HodHome.component"
import InstructorHome from "./InstructorHome"
import TaHome from "./TaHome"


var role = localStorage.getItem('role')

export default class LeaveRequest extends Component {
    constructor(props) {
        super(props);

        this.onChangeType = this.onChangeType.bind(this)

        this.onChangeStart = this.onChangeStart.bind(this)
        this.onChangeEnd = this.onChangeEnd.bind(this)
        this.onChangeID = this.onChangeID.bind(this)
        this.onChangeDoc = this.onChangeDoc.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            requestType: '',
            startDate: '',
            endDate: '',
            replacementID: '',
            documents: ''
        }
    }

    onChangeType(e) {
        this.setState({
            requestType: e.target.value
        });

    }

    onChangeStart(e) {
        this.setState({
            startDate: e.target.value
        });

    }
    onChangeEnd(e) {
        this.setState({
            endDate: e.target.value
        });

    }
    onChangeID(e) {
        this.setState({
            replacementID: e.target.value
        });

    }
    onChangeDoc(e) {
        this.setState({
            documents: e.target.value
        });

    }

    onSubmit(e) {
        e.preventDefault();

        const leave = {
            requestType: this.state.requestType,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            replacementID: this.state.replacementID,
            documents: this.state.documents

        }

        console.log(leave.requestType)


        axios.post('http://localhost:3000/as/sendRequest', leave,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)
            }).catch((err) => {
                alert('something went wrong')
            })
        this.setState({
            requestType: '',
            startDate: '',
            endDate: '',
            replacementID: '',
            documents: ''
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
                        <br />
                        <label>Type</label>
                        <br />

                        <select onChange={this.onChangeType} >
                            <option value="COMPENSATION" >COMPENSATION</option>
                            <option value="ACCIDENTAL" >ACCIDENTAL</option>
                            <option value="SICK" >SICK</option>
                            <option value="MATERNITY">MATERNITY</option>
                            <option value="ANNUAL">ANNUAL</option>
                        </select>

                        <form onSubmit={this.onSubmit}>
                            <br />
                            <label>Start Date</label>
                            <br />
                            <input type="DATE" required value={this.state.startDate} onChange={this.onChangeStart} ></input>
                            <br></br><br></br>

                            <label>End Date</label>
                            <br></br>
                            <input type="DATE" required value={this.state.endDate} onChange={this.onChangeEnd} ></input>
                            <br></br><br></br>


                            <label>Replacement ID</label>
                            <br></br>
                            <input type="text" value={this.state.replacementID} onChange={this.onChangeID} placeholder="enter ID"></input>
                            <br></br>

                            <label>Reason</label>
                            <br></br>
                            <input type="text" required value={this.state.documents} onChange={this.onChangeDoc} placeholder="State your Reason"></input>
                            <br></br>
                            <button type="submit" value="add" className="btn btn-primary" > Send </button> <br />
                        </form>
                    </div>
                </div>
            );break;


            case 'hod': return (
                <div>
                    <HodHome />
                    <div className='container'>
                        <br />
                        <label>Type</label>
                        <br />

                        <select onChange={this.onChangeType} >
                            <option value="COMPENSATION" >COMPENSATION</option>
                            <option value="ACCIDENTAL" >ACCIDENTAL</option>
                            <option value="SICK" >SICK</option>
                            <option value="MATERNITY">MATERNITY</option>
                            <option value="ANNUAL">ANNUAL</option>
                        </select>

                        <form onSubmit={this.onSubmit}>
                            <br />
                            <label>Start Date</label>
                            <br />
                            <input type="DATE" required value={this.state.startDate} onChange={this.onChangeStart} ></input>
                            <br></br><br></br>

                            <label>End Date</label>
                            <br></br>
                            <input type="DATE" required value={this.state.endDate} onChange={this.onChangeEnd} ></input>
                            <br></br><br></br>


                            <label>Replacement ID</label>
                            <br></br>
                            <input type="text" value={this.state.replacementID} onChange={this.onChangeID} placeholder="enter ID"></input>
                            <br></br>

                            <label>Reason</label>
                            <br></br>
                            <input type="text" required value={this.state.documents} onChange={this.onChangeDoc} placeholder="State your Reason"></input>
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
                        <br />
                        <label>Type</label>
                        <br />

                        <select onChange={this.onChangeType} >
                            <option value="COMPENSATION" >COMPENSATION</option>
                            <option value="ACCIDENTAL" >ACCIDENTAL</option>
                            <option value="SICK" >SICK</option>
                            <option value="MATERNITY">MATERNITY</option>
                            <option value="ANNUAL">ANNUAL</option>
                        </select>

                        <form onSubmit={this.onSubmit}>
                            <br />
                            <label>Start Date</label>
                            <br />
                            <input type="DATE" required value={this.state.startDate} onChange={this.onChangeStart} ></input>
                            <br></br><br></br>

                            <label>End Date</label>
                            <br></br>
                            <input type="DATE" required value={this.state.endDate} onChange={this.onChangeEnd} ></input>
                            <br></br><br></br>


                            <label>Replacement ID</label>
                            <br></br>
                            <input type="text" value={this.state.replacementID} onChange={this.onChangeID} placeholder="enter ID"></input>
                            <br></br>

                            <label>Reason</label>
                            <br></br>
                            <input type="text" required value={this.state.documents} onChange={this.onChangeDoc} placeholder="State your Reason"></input>
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
                        <br />
                        <label>Type</label>
                        <br />

                        <select onChange={this.onChangeType} >
                            <option value="COMPENSATION" >COMPENSATION</option>
                            <option value="ACCIDENTAL" >ACCIDENTAL</option>
                            <option value="SICK" >SICK</option>
                            <option value="MATERNITY">MATERNITY</option>
                            <option value="ANNUAL">ANNUAL</option>
                        </select>

                        <form onSubmit={this.onSubmit}>
                            <br />
                            <label>Start Date</label>
                            <br />
                            <input type="DATE" required value={this.state.startDate} onChange={this.onChangeStart} ></input>
                            <br></br><br></br>

                            <label>End Date</label>
                            <br></br>
                            <input type="DATE" required value={this.state.endDate} onChange={this.onChangeEnd} ></input>
                            <br></br><br></br>


                            <label>Replacement ID</label>
                            <br></br>
                            <input type="text" value={this.state.replacementID} onChange={this.onChangeID} placeholder="enter ID"></input>
                            <br></br>

                            <label>Reason</label>
                            <br></br>
                            <input type="text" required value={this.state.documents} onChange={this.onChangeDoc} placeholder="State your Reason"></input>
                            <br></br>
                            <button type="submit" value="add" className="btn btn-primary" > Send </button> <br />
                        </form>
                    </div>
                </div>
            );break;
        }

    }
}
