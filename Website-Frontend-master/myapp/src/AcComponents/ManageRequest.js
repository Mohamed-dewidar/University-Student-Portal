import React, { Component } from 'react'
import axios from 'axios'

import HodHome from "./HodHome.component"
export default class ManageRequest extends Component {



    constructor(props) {
        super(props);

        this.Accept = this.Accept.bind(this);
        this.Reject = this.Reject.bind(this);
        this.onChangeID = this.onChangeID.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            requestID: ''

        }
    }



    onChangeID(e) {
        this.setState({
            requestID: e.target.value
        });

    }





    Accept(e) {
        e.preventDefault();

        const request = {
            requestID: this.state.requestID
        }

        axios.put(`http://localhost:3000/as/acceptChangeRequest`, request,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {

                alert(res.data.msg)

            }).catch((err) => {
                alert('something went wrong')
            })



        this.setState({
            requestID: ''
        })
    }


    Reject(e) {
        e.preventDefault();

        const request = {
            requestID: this.state.requestID
        }




        axios.put(`http://localhost:3000/as/rejectRequest`, request,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {


                alert(res.data.msg)



            }).catch((err) => {
                alert('something went wrong')
            })



        this.setState({
            requestID: ''


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
                    <label>Request ID </label>
                    <br></br>
                    <input type="text" required value={this.state.requestID} onChange={this.onChangeID} placeholder="enter ID"></input>
                    <br></br>


                    <button type="submit" value="add" onClick={this.Accept} className="btn btn-primary" > Accept </button>
                    <button type="submit" value="add" onClick={this.Reject} className="btn btn-primary" > Reject </button> <br />
                    <br />

                </div>
            </div>
        )
    }
}
