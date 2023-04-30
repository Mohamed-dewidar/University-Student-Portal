import React, { Component } from 'react'
import axios from 'axios';
import logo from '../Images/guc.svg';

import '../CSS/master.css'
import { createBrowserHistory } from 'history';

var auth

  
  export default class Login extends Component {

  
    
    constructor(props){
        super(props);

            this.onChangeEmail = this.onChangeEmail.bind(this)
            this.onChangePassword = this.onChangePassword.bind(this)
            this.onSubmit = this.onSubmit.bind(this)

        this.state={
            email : '' ,
            password : ''
        }
    }

     
    

    onChangeEmail(e){
        this.setState({
            email : e.target.value
        });
        console.log(this.state.password)
    }

    onChangePassword(e){
        this.setState({
            password : e.target.value
        });
        console.log(this.state.email)
    }

  

    onSubmit(e){
        e.preventDefault();

        const user = ({
            email : this.state.email,
            password : this.state.password
        })

        console.log(user)
        
        axios.post('http://localhost:3000/login',user).then(res=>{
        localStorage.setItem('authtoken', res.headers['authtoken'])
        localStorage.setItem('role',res.data.role)
       // axios.defaults.headers.common['authtoken'] = localStorage.getItem('authtoken')


        auth=localStorage.getItem('authtoken')
       

        if(auth)
            localStorage.setItem('auth','true')
            

       if(localStorage.getItem('role')==='hr')
        window.location='/HrHome'
        else{
            var check=localStorage.getItem('role')
        switch(check){
            case 'hod' : window.location='/HodHome';break;
            case 'instructor' : window.location='/InstructorHome';break;
            case 'coordinator' : window.location='/CoordinatorHome';break;
            case 'ta' : window.location='/TaHome';break;

        }
        }

      }).catch((err)=>{
          alert("Check Your Data");
      })

      
               

       
        
       

    }
 

    
   render() {
        return (
            <div className="login-page">
           {window.history.replaceState(null, "Login Page", "/login")}
            <div className="form" >
            <img width="100px" height="100px" src={logo} className="App-logo" alt="logo" />
        
            <form onSubmit={this.onSubmit}>
               <label>Email </label>
               <br></br>
               <input type="text" required value={this.state.email} onChange={this.onChangeEmail} placeholder="enter your GUC email"></input>
               <br></br>
               <label>Password </label>
               <br></br>
               <input type="password" required value={this.state.password} onChange={this.onChangePassword} placeholder="enter your password"></input>
               <br></br>
               
                <button type="submit" value="Login" className="btn btn-primary" > Login </button>
               
            </form>
            </div>
            </div>
        )
    }



   

}




