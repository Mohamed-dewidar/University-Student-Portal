import axios from 'axios'
import React, { Component } from 'react'


import HrHome from "../HrComponents/HrHome.component"
import CoordinatorHome from "../AcComponents/CoordinatorHome"
import HodHome from "../AcComponents/HodHome.component"
import InstructorHome from "../AcComponents/InstructorHome"
import TaHome from "../AcComponents/TaHome"
var role = localStorage.getItem('role')



var check = localStorage.getItem('role')
export default class ResetPassword extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (localStorage.getItem('role') === 'hr') {
            axios.get('http://localhost:3000/hr/resetPassword',
                { headers: { 'authtoken': localStorage.getItem('authtoken') } }).then(res => {
                    alert("Password reseted to 123456")
                    window.location = '/hrhome'
                }).catch((err) => {
                    alert("error")
                })

        }


        else {
            axios.get('http://localhost:3000/as/resetPassword',
                { headers: { 'authtoken': localStorage.getItem('authtoken') } }).then(res => {
                    alert(res.data.msg)
                    switch (check) {
                        case 'hod': window.location = '/HodHome'; break;
                        case 'instructor': window.location = '/InstructorHome'; break;
                        case 'coordinator': window.location = '/CoordinatorHome'; break;
                        case 'ta': window.location = '/TaHome'; break;

                    }

                }).catch((err) => {
                    alert(err)

                })



        }
    }

    render() {

        switch (role) {

            case 'hr': return (
                <div>
                    <HrHome />
                </div>
            ); break;

            case 'coordinator': return (
                <div>
                    <CoordinatorHome />
                </div>
            ); break;

            case 'hod': return (
                <div>
                    <HodHome  />
                </div>
            ); break;

            case 'instructor': return (
                <div>
                    <InstructorHome  />
                </div>
            ); break;


            case 'ta': return (
                <div>
                    <TaHome  />
                </div>
            ); break;

        }

    }
}
