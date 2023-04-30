import React, { Component } from 'react'
import axios from 'axios'
import CoordinatorHome from "./CoordinatorHome"
import HodHome from "./HodHome.component"
import InstructorHome from "./InstructorHome"
import TaHome from "./TaHome"


var role = localStorage.getItem('role')


export default class ChangeDayoff extends Component {
    constructor(props) {
        super(props);

        this.onChangeDayoff = this.onChangeDayoff.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        

        this.state = {
            newDayOff: ''
        }
    }

    onChangeDayoff(e) {
        this.setState({
            newDayOff: e.target.value
        });

    }

    onSubmit(e) {
        e.preventDefault();

        const dayoff = {
            newDayOff: this.state.newDayOff

        }


        axios.post('http://localhost:3000/as/changeDayOffReq', dayoff,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)
            }).catch((err) => {
                alert('something went wrong')
            })
        this.setState({
            newDayOff: ''
        })

    }

   




    render() {

        switch (role) {
            case 'coordinator': return (
                <div>
                    <CoordinatorHome />
                    <div className='container'>
                        <label>New Dayoff</label>
                        <br />
                        <select onChange={this.onChangeDayoff} >
                            <option value="saturday" >saturday</option>
                            <option value="sunday" >sunday</option>
                            <option value="monday" >monday</option>
                            <option value="tuesday">tuesday</option>
                            <option value="wednesday">wednesday</option>
                            <option value="thursday">thursday</option>
                        </select>
                        <br />
                        <form onSubmit={this.onSubmit}>
                            <button type="submit" value="add" className="btn btn-primary" > Send </button> <br />
                        </form>
                    </div>
                </div>
            );break;

            case 'hod': return (
                <div>
                    <HodHome  />
                    <div className='container'>
                        <label>New Dayoff</label>
                        <br />
                        <select onChange={this.onChangeDayoff} >
                            <option value="saturday" >saturday</option>
                            <option value="sunday" >sunday</option>
                            <option value="monday" >monday</option>
                            <option value="tuesday">tuesday</option>
                            <option value="wednesday">wednesday</option>
                            <option value="thursday">thursday</option>
                        </select>
                        <br />
                        <form onSubmit={this.onSubmit}>
                            <button type="submit" value="add" className="btn btn-primary" > Send </button> <br />
                        </form>
                    </div>
                </div>
            );break;

            case 'instructor': return (
                <div>
                    <InstructorHome  />
                    <div className='container'>
                        <label>New Dayoff</label>
                        <br />
                        <select onChange={this.onChangeDayoff} >
                            <option value="saturday" >saturday</option>
                            <option value="sunday" >sunday</option>
                            <option value="monday" >monday</option>
                            <option value="tuesday">tuesday</option>
                            <option value="wednesday">wednesday</option>
                            <option value="thursday">thursday</option>
                        </select>
                        <br />
                        <form onSubmit={this.onSubmit}>
                            <button type="submit" value="add" className="btn btn-primary" > Send </button> <br />
                        </form>
                    </div>
                </div>
            );break;

            case 'ta': return (
                <div>
                    <TaHome  />
                    <div className='container'>
                        <label>New Dayoff</label>
                        <br />
                        <select onChange={this.onChangeDayoff} >
                            <option value="saturday" >saturday</option>
                            <option value="sunday" >sunday</option>
                            <option value="monday" >monday</option>
                            <option value="tuesday">tuesday</option>
                            <option value="wednesday">wednesday</option>
                            <option value="thursday">thursday</option>
                        </select>
                        <br />
                        <form onSubmit={this.onSubmit}>
                            <button type="submit" value="add" className="btn btn-primary" > Send </button> <br />
                        </form>
                    </div>
                </div>
            );break;
        }

    }
}
