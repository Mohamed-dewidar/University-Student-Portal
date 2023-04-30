import React, { Component } from 'react'
import axios from 'axios'
import HrHome from "./HrHome.component"


export default class DeleteFaculty extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back = this.back.bind(this)

        this.state = {
            name: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });

    }

    onSubmit(e) {
        e.preventDefault();

        const room = {
            name: this.state.name
        }



        axios.post('http://localhost:3000/hr/deletefaculty', room,
            { headers: { 'authtoken': localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)

            }).catch((err) => {
                // alert('something went wrong')
                this.setState({ name: '' })
            })
        this.setState({ name: '' })

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
                        <label>Faculty Name </label>
                        <br></br>
                        <input type="text" required value={this.state.name} onChange={this.onChangeName} placeholder="enter faculty name"></input>
                        <br></br>

                        <button type="submit" value="add" className="btn btn-primary" > Delete </button> <br />

                     

                    </form>
                </div>

            </div>
        )
    }
}
