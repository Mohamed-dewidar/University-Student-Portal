import React, { Component } from 'react'
import axios from 'axios'
import HrHome from "./HrHome.component"


export default class UpdateStaff extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this)
        this.onChangeRole = this.onChangeRole.bind(this)
        this.onChangeLocation = this.onChangeLocation.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            userId: '',
            newRole: '',
            newLocation: ''
        }
    }

    onChangeID(e) {
        this.setState({
            userId: e.target.value
        });

    }

    onChangeRole(e) {
        this.setState({
            newRole: e.target.value
        });

    }
    onChangeLocation(e) {
        this.setState({
            newLocation: e.target.value
        });

    }


    onSubmit(e) {
        e.preventDefault();

        const staffrole = {
            userId: this.state.userId,
            newRole: this.state.newRole
        }

        const staffloc = {
            userId: this.state.userId,
            newLocation: this.state.newLocation
        }

        if (this.state.newRole != '') {

            axios.put('http://localhost:3000/hr/updatestaffrole', staffrole,
                { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                    alert(res.data.msg)
                }).catch((err) => {
                    alert('something went wrong')
                })

        }
        if (this.state.newLocation != '') {

            axios.put('http://localhost:3000/hr/updatestaffoffice', staffloc,
                { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                    alert(res.data.msg)
                }).catch((err) => {
                    alert('something went wrong')
                })

        }

        this.setState({
            userId: '',
            newRole: '',
            newLocation: ''
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
                        <input type="text" required value={this.state.userId} onChange={this.onChangeID} placeholder="enter ID"></input>
                        <br></br>

                        <label>New Role </label>
                        <br></br>
                        <input type="text" value={this.state.newRole} onChange={this.onChangeRole} placeholder="enter new role"></input>
                        <br></br>

                        <label>New Office</label>
                        <br></br>
                        <input type="text" value={this.state.newLocation} onChange={this.onChangeLocation} placeholder="enter new location"></input>
                        <br></br>

                        <button type="submit" value="add" className="btn btn-primary" > Update </button> <br />

                    </form>
                </div>

            </div>
        )
    }
}
