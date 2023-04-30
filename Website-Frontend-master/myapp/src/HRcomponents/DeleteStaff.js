import React, { Component } from 'react'
import axios from 'axios'
import HrHome from "./HrHome.component"


export default class DeleteStaff extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            staffId: ''
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




        axios.post('http://localhost:3000/hr/deletestaff', staff,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)
            }).catch((err) => {
                // alert('something went wrong')
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
                        <button type="submit" value="add" className="btn btn-primary" > Delete </button> <br />


                    </form>
                </div>

            </div>
        )
    }
}
