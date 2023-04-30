import React, { Component } from 'react'
import axios from 'axios';

import HrHome from "../HrComponents/HrHome.component"
import CoordinatorHome from "../AcComponents/CoordinatorHome"
import HodHome from "../AcComponents/HodHome.component"
import InstructorHome from "../AcComponents/InstructorHome"
import TaHome from "../AcComponents/TaHome"



var role  = localStorage.getItem('role')
export default class UpdateProfile extends Component {

    constructor(props) {
        super(props);



        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            newEmail: '',
            newPassword: ''
        }

    }

    onChangeEmail(e) {
        this.setState({
            newEmail: e.target.value
        });

    }

    onChangePassword(e) {
        this.setState({
            newPassword: e.target.value
        });

    }



    onSubmit(e) {
        e.preventDefault();

        const email = ({
            newEmail: this.state.newEmail
        })

        const password = ({

            newPassword: this.state.newPassword
        })


        if (localStorage.getItem('role') === 'hr') {

            if (email.newEmail != '') {

                axios.put('http://localhost:3000/hr/updateEmail', email,
                    { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                        alert(res.data.msg)

                    }
                    )
            }
            if (password.newPassword != '')
                axios.put('http://localhost:3000/hr/updatePassword', password,
                    { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                        alert(res.data.msg)

                    }
                    )


        }

        else {
            if (email.newEmail != '')
                axios.put('http://localhost:3000/as/updateEmail', email,
                    { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                        alert(res.data.msg)


                    }
                    )
            if (password.newPassword != '')
                axios.put('http://localhost:3000/as/updatePassword', password,
                    { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                        alert(res.data.msg)

                    }
                    )




        }

        this.setState({
            newEmail: '',
            newPassword: ''
        })

    }


    render() {

        switch (role) {


            case 'hr': return (

                <div>
                    <HrHome />
                    <div className='container'>

                        <form onSubmit={this.onSubmit}>
                            <label>Email </label>
                            <br></br>
                            <input type="text" value={this.state.newEmail} onChange={this.onChangeEmail} placeholder="enter the new email"></input>
                            <br></br>
                            <label>Password </label>
                            <br></br>
                            <input type="password" value={this.state.newPassword} onChange={this.onChangePassword} placeholder="enter the new  password"></input>
                            <br></br>

                            <button type="submit" value="update" className="btn btn-primary" > Update </button>

                        </form>
                    </div>
                </div>
            ); break;


            case 'coordinator': return (

                <div>
                    <CoordinatorHome />
                    <div className='container'>

                        <form onSubmit={this.onSubmit}>
                            <label>Email </label>
                            <br></br>
                            <input type="text" value={this.state.newEmail} onChange={this.onChangeEmail} placeholder="enter the new email"></input>
                            <br></br>
                            <label>Password </label>
                            <br></br>
                            <input type="password" value={this.state.newPassword} onChange={this.onChangePassword} placeholder="enter the new  password"></input>
                            <br></br>

                            <button type="submit" value="update" className="btn btn-primary" > Update </button>

                        </form>
                    </div>
                </div>
            ); break;

            case 'hod': return (

                <div>
                    <HodHome  />
                    <div className='container'>

                        <form onSubmit={this.onSubmit}>
                            <label>Email </label>
                            <br></br>
                            <input type="text" value={this.state.newEmail} onChange={this.onChangeEmail} placeholder="enter the new email"></input>
                            <br></br>
                            <label>Password </label>
                            <br></br>
                            <input type="password" value={this.state.newPassword} onChange={this.onChangePassword} placeholder="enter the new  password"></input>
                            <br></br>

                            <button type="submit" value="update" className="btn btn-primary" > Update </button>

                        </form>
                    </div>
                </div>
            ); break;


            case 'instructor': return (

                <div>
                    <InstructorHome  />
                    <div className='container'>

                        <form onSubmit={this.onSubmit}>
                            <label>Email </label>
                            <br></br>
                            <input type="text" value={this.state.newEmail} onChange={this.onChangeEmail} placeholder="enter the new email"></input>
                            <br></br>
                            <label>Password </label>
                            <br></br>
                            <input type="password" value={this.state.newPassword} onChange={this.onChangePassword} placeholder="enter the new  password"></input>
                            <br></br>

                            <button type="submit" value="update" className="btn btn-primary" > Update </button>

                        </form>
                    </div>
                </div>
            ); break;

            case 'ta': return (

                <div>
                    <TaHome  />
                    <div className='container'>

                        <form onSubmit={this.onSubmit}>
                            <label>Email </label>
                            <br></br>
                            <input type="text" value={this.state.newEmail} onChange={this.onChangeEmail} placeholder="enter the new email"></input>
                            <br></br>
                            <label>Password </label>
                            <br></br>
                            <input type="password" value={this.state.newPassword} onChange={this.onChangePassword} placeholder="enter the new  password"></input>
                            <br></br>

                            <button type="submit" value="update" className="btn btn-primary" > Update </button>

                        </form>
                    </div>
                </div>
            ); break;
        }

    }
}
