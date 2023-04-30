import React, { Component } from 'react'
import axios from 'axios'


import InstructorHome from "./InstructorHome"


var result = []
var check

export default class ViewSlots extends Component {
    constructor(props) {
        super(props);

        this.onChangeCode = this.onChangeCode.bind(this)
        this.back = this.back.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            courseCode: '',
            array: []

        }
    }

    onChangeCode(e) {
        this.setState({
            courseCode: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const slot = {
            courseCode: this.state.courseCode

        }


        axios.get(`http://localhost:3000/as/InstructorViewSlots/${slot.courseCode}`,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {


                result = res.data.array

                if (result)
                    this.setState({
                        array: result
                    })
                else
                    alert(res.data.msg)


            }).catch((err) => {
                alert(err)
            })

        this.setState({
            courseCode: ''
        })

    }


    back() {
        check = localStorage.getItem('role')
        switch (check) {

            case 'instructor': window.location = '/InstructorHome'; break;

        }
    }

    render() {
        return (


            <div>

                <InstructorHome />
                <div className='container'>

                    <form onSubmit={this.onSubmit}>

                        <label>Course Code</label>
                        <br></br>
                        <input type="text" required value={this.state.courseCode} onChange={this.onChangeCode} placeholder="enter code"></input>
                        <br></br>

                        <button type="submit" value="add" className="btn btn-primary" > Get </button> <br />
                        <ul>
                            {
                                this.state.array.map(ele => (

                                    <li key={ele.courseCode}><div>Code : {ele.courseCode} <br /> Date : {ele.date} <br />
                                        Room : {ele.room} <br /> Slot Number : {ele.slotNumber}
                                    </div> <br />

                                    </li>

                                ))
                            }
                        </ul>

                    </form>





                </div>
            </div>
        )
    }
}
