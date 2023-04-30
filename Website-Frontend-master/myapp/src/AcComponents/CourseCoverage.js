import React, { Component } from 'react'
import axios from 'axios'

import InstructorHome from "./InstructorHome"

export default class CourseCoverage extends Component {
    constructor(props) {
        super(props);

        this.onChangeCode = this.onChangeCode.bind(this)
        this.onChangeCover = this.onChangeCover.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            courseCode: '',
            coverage: ''
        }
    }

    onChangeCode(e) {
        this.setState({
            courseCode: e.target.value
        });

    }

    onChangeCover(e) {
        this.setState({
            coverage: e.target.value
        });

    }


    onSubmit(e) {
        e.preventDefault();

        const course = {
            courseCode: this.state.courseCode
        }




        axios.get(`http://localhost:3000/as/InstructorCourseCoverage/${course.courseCode}`,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {


                this.setState({
                    coverage: res.data.coverage
                })

                if (res.data.msg)
                    alert(res.data.msg)



            }).catch((err) => {
                alert('something went wrong')
            })



        this.setState({
            courseCode: ''
        })

    }

    back() {
        window.location = '/InstructorHome'
    }



    render() {
        return (
            <div>

                <InstructorHome />
                <div className='container'>

                    <form onSubmit={this.onSubmit}>

                        <label>Course Code </label>
                        <br></br>
                        <input type="text" required value={this.state.courseCode} onChange={this.onChangeCode} placeholder="enter Code"></input>
                        <br></br>


                        <button type="submit" value="add" className="btn btn-primary" > Get </button> <br />
                        <br /><br /><br />

                        <div>
                            Coverage : {this.state.coverage}
                        </div>



                    </form>
                    <br />
                </div>

            </div>
        )
    }
}
