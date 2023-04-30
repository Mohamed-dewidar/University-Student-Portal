import React, { Component } from 'react'
import axios from 'axios'
import HrHome from "./HrHome.component"


export default class UpdateSalary extends Component {
    constructor(props){
        super(props);

        this.onChangeID = this.onChangeID.bind(this)
        this.onChangeSalary = this.onChangeSalary.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back=this.back.bind(this)

    this.state={
        id : '',
        newSalary : ''
    }
}

    onChangeID(e){
        this.setState({
            id : e.target.value
        });
        
    }

    onChangeSalary(e){
        this.setState({
            newSalary : e.target.value
        });
        
    }

    
   

    onSubmit(e){
        e.preventDefault();
  
        const staff={
            id : this.state.id,
            newSalary : this.state.newSalary
        }

      
    

      axios.put('http://localhost:3000/hr/updatesalary',staff,
      {headers: { "authtoken": localStorage.getItem('authtoken')}}).then(res=>{
          alert(res.data.msg)
      }).catch((err)=>{
         alert('something went wrong')
      })

    
      
      this.setState({
        id : '',
        newSalary : ''
    })
  
    }
  
    back(){
        window.location='/hrhome'
    }



    render() {
        return (
            <div>
                <HrHome/>
<div className='container'>
                <form onSubmit={this.onSubmit}>
               <label>Staff ID </label>
               <br></br>
               <input type="text"  required value={this.state.id} onChange={this.onChangeID} placeholder="enter ID"></input>
               <br></br>

               <label>New Salary </label>
               <br></br>
               <input type="number"  required value={this.state.newSalary} onChange={this.onChangeSalary} placeholder="enter salary"></input>
               <br></br>
              
             
               <button type="submit" value="add" className="btn btn-primary" > Update </button> <br/>

                    </form>
                    </div>
            </div>
        )
    }
}
