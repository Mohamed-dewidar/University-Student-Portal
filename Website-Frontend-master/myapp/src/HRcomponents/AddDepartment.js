import React, { Component } from 'react'
import axios from 'axios'
import HrHome from "./HrHome.component"

export default class AddDepartment extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeFaculty = this.onChangeFaculty.bind(this)
        this.onChangeHod = this.onChangeHod.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            name: '',
            facultyName: '',
            hodID: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });

    }
    onChangeFaculty(e) {
        this.setState({
            facultyName: e.target.value
        });

    }
    onChangeHod(e) {
        this.setState({
            hodID: e.target.value
        });

    }

    onSubmit(e) {
        e.preventDefault();

        const dep = {
            name: this.state.name,
            facultyName: this.state.facultyName,
            hodID: this.state.hodID
        }

        axios.post('http://localhost:3000/hr/adddepartment', dep,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)
            }).catch((err) => {
                alert('something went wrong')
            })
        this.setState({
            name: '',
            facultyName: '',
            hodID: ''
        })

    }

    back() {
        window.location = '/hrhome'
    }



    render() {
        return (
            <div>
                    <HrHome/>

                <div className='container'>
                    <form onSubmit={this.onSubmit}>
                        <label>Department Name </label>
                        <br></br>
                        <input type="text" required value={this.state.name} onChange={this.onChangeName} placeholder="enter department name"></input>
                        <br></br>
                        <label>Faculty  </label>
                        <br></br>
                        <input type="text" required value={this.state.facultyName} onChange={this.onChangeFaculty} placeholder="enter faculty name"></input>
                        <br></br>
                        <label>Head of department </label>
                        <br></br>
                        <input type="text" required value={this.state.hodID} onChange={this.onChangeHod} placeholder="enter hod ID"></input>
                        <br></br>

                        <button type="submit" value="add" className="btn btn-primary" > Add </button> <br />


                    </form>

                </div>
            </div>
        )
    }
}
