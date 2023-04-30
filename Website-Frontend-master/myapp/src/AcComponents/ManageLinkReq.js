import React, { Component } from 'react'
import axios from 'axios'
import CoordinatorHome from "./CoordinatorHome"
export default class ManageLinkReq extends Component {
    constructor(props) {
        super(props);

        this.Accept = this.Accept.bind(this);
        this.Reject = this.Reject.bind(this);
        this.onChangeID = this.onChangeID.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            reqID: ''

        }
    }



    onChangeID(e) {
        this.setState({
            reqID: e.target.value
        });

    }





    Accept(e) {
        e.preventDefault();

        const request = {
            reqID: this.state.reqID
        }

        axios.put(`http://localhost:3000/as/acceptLinking`, request,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {

                alert(res.data.msg)

            }).catch((err) => {
                alert('something went wrong')
            })



        this.setState({
            reqID: ''
        })
    }


    Reject(e) {
        e.preventDefault();

        const request = {
            reqID: this.state.reqID
        }




        axios.put(`http://localhost:3000/as/rejectLinking`, request,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {


                alert(res.data.msg)



            }).catch((err) => {
                alert('something went wrong')
            })



        this.setState({
            reqID: ''


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

                    <label>Request ID </label>
                    <br></br>
                    <input type="text" required value={this.state.reqID} onChange={this.onChangeID} placeholder="enter ID"></input>
                    <br></br>


                    <button type="submit" value="add" onClick={this.Accept} className="btn btn-primary" > Accept </button>
                    <button type="submit" value="add" onClick={this.Reject} className="btn btn-primary" > Reject </button> <br />
                    <br />








                </div>
            </div>
        )
    }
}
