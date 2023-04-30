import axios from 'axios';
import React, { Component } from 'react'
import HrHome from "./HrHome.component"


export default class DeleteLocation extends Component {


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


        axios.post('http://localhost:3000/hr/updatelocation', room,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {
                alert(res.data.msg)
            }).catch((err) => {
                //alert('something went wrong')
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


                        <button type="submit" value="delete" className="btn btn-primary" > Delete </button> <br />

                     

                    </form>
                </div>

            </div>
        )
    }
}
