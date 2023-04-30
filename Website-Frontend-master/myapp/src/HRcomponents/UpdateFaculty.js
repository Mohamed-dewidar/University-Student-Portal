import React, { Component } from 'react'
import axios from 'axios'
import HrHome from "./HrHome.component"

export default class UpdateFaculty extends Component {


    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeNewName = this.onChangeNewName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            name: '',
            newName: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });

    }
    onChangeNewName(e) {
        this.setState({
            newName: e.target.value
        });
    }



    onSubmit(e) {
        e.preventDefault();

        const room = {
            name: this.state.name,
            newName: this.state.newName
        }

        axios.put('http://localhost:3000/hr/updatefaculty', room,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)

            }).catch((err) => {
                alert('something went wrong')
            })

        this.setState({
            name: '',
            newName: ''
        })
    }

    back() {
        window.location = '/hrhome'
    }



    render() {
        return (
            <div>
                <HrHome />

                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <label>Faculty Name </label>
                        <br></br>
                        <input type="text" required value={this.state.name} onChange={this.onChangeName} placeholder="enter faculty name"></input>
                        <br></br>
                        
                        <label>Faculty new name </label>
                        <br></br>
                        <input type="text" required value={this.state.newName} onChange={this.onChangeNewName} placeholder="enter faculty new name"></input>
                        <br></br>

                        <button type="submit" value="add" className="btn btn-primary" > Update </button> <br />

                     

                    </form>
                </div>

            </div>
        )
    }
}
