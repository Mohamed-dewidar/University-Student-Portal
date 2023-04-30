import React, { Component } from 'react'
import axios from 'axios'
import HrHome from "./HrHome.component"

export default class AddCourse extends Component {
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeFaculty = this.onChangeFaculty.bind(this)
        this.onChangeDepartment = this.onChangeDepartment.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.back=this.back.bind(this)

    this.state={
        code : '',
        departmentName : '',
        facultyName : ''
    }
}

    onChangeName(e){
        this.setState({
            code : e.target.value
        });
        
    }
    onChangeFaculty(e){
        this.setState({
            facultyName : e.target.value
        });
        
    }
    onChangeDepartment(e){
        this.setState({
            departmentName : e.target.value
        });
        
    }

    onSubmit(e){
        e.preventDefault();
  
        const course={
            code : this.state.code,
            departmentName : this.state.departmentName,
            facultyName : this.state.facultyName
            
        }
      
      axios.post('http://localhost:3000/hr/addcourse',course,
      {headers: { authtoken : localStorage['authtoken']}}).then(res=>{
          alert(res.data.msg)
      }).catch((err)=>{
          alert('something went wrong')
      })
      this.setState({
        code : '',
        departmentName : '',
        facultyName : ''
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
               <label>Course Code </label>
               <br></br>
               <input type="text"  required value={this.state.code} onChange={this.onChangeName} placeholder="enter code"></input>
               <br></br>
              
               <label>Department name </label>
               <br></br>
               <input type="text"  required value={this.state.departmentName} onChange={this.onChangeDepartment} placeholder="enter department"></input>
               <br></br>

               <label>Faculty</label>
               <br></br>
               <input type="text"  required value={this.state.facultyName} onChange={this.onChangeFaculty} placeholder="enter faculty name"></input>
               <br></br>
               
               <button type="submit" value="add" className="btn btn-primary" > Add </button> <br/>

               

                </form>

             </div>
                
            </div>
        )
    }
}
