import React, { Component } from 'react'
import axios from 'axios'
import '../CSS/table.css'
import CoordinatorHome from "./CoordinatorHome"

var check
var result

export default class ViewLinkReq extends Component {
    constructor(props) {
        super(props);


        this.back = this.back.bind(this)

        this.state = {

            array: []

        }
    }



    componentDidMount() {



        axios.get(`http://localhost:3000/as/viewSlotLinkingRequests`,
            { headers: { "authtoken": localStorage.getItem('authtoken') } }).then(res => {


                result = res.data.slots

                if (result)
                    this.setState({
                        array: result
                    })
                else
                    alert(res.data.msg)


            }).catch((err) => {
                alert(err)
            })


    }


    back() {
        check = localStorage.getItem('role')
        switch (check) {

            case 'coordinator': window.location = '/CoordinatorHome'; break;

        }
    }

    render() {
        return (

            <div>

                <CoordinatorHome />
                <div className='container'>

                    <div className="container">
                        <table >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Room</th>
                                    <th> Slot Number </th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.array.map(ele => (
                                        <tr>
                                            <td>{ele.amID}</td>
                                            <td>{ele.date}</td>
                                            <td>{ele.room}</td>
                                            <td>{ele.slotNumber}</td>
                                            <td>{ele.status}</td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <br />
                    </div>


                </div>
            </div>
        )
    }
}
