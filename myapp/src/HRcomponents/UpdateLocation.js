import React, { Component } from 'react'
import axios from 'axios'
import HrHome from "./HrHome.component"



export default class UpdateLocation extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeCapacity = this.onChangeCapacity.bind(this)
        this.onChangeType = this.onChangeType.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            name: '',
            capacity: 0,
            type: ''
        }

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });

    }

    onChangeCapacity(e) {
        this.setState({
            capacity: e.target.value
        });

    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        });

    }

    onSubmit(e) {
        e.preventDefault();

        const room = {
            name: this.state.name,
            capacity: this.state.capacity,
            type: this.state.type
        }

        axios.put('http://localhost:3000/hr/updatelocation', room,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)

            }).catch((err) => {
                alert('something went wrong')
            })

        this.setState({
            name: '',
            capacity: 0,
            type: ''
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
                        <label>Room </label>
                        <br></br>
                        <input type="text" required value={this.state.name} onChange={this.onChangeName} placeholder="enter room name"></input>
                        <br></br>
                        <label>capacity</label>
                        <br></br>
                        <input type="number" value={this.state.capacity} onChange={this.onChangeCapacity} placeholder="enter capacity"></input>
                        <br></br>
                        <label>type </label>
                        <br></br>
                        <input type="text" value={this.state.type} onChange={this.onChangeType} placeholder="enter type"></input>
                        <br></br>

                        <button type="submit" value="add" className="btn btn-primary" > Update </button> <br />



                    </form>
                </div>
            </div>
        )
    }
}
