import axios from 'axios';
import React, { Component } from 'react'


export default class Logout extends Component {
        constructor(props){
            super(props);

        }

        componentDidMount(){
            axios.post('http://localhost:3000/logout' ,
            {headers: { "authtoken": localStorage.getItem('authtoken') }} ).then(res=>{
           
            localStorage.setItem('auth','false')
            localStorage.setItem('authtoken',null)
            localStorage.setItem('role',null)
          
            
        })
    }

    render() {
        return (
            <div>
                      {this.props.history.push('/')}
            </div>
        )
    }
}
