import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function AddStudent() {
    let navigate = useNavigate();
    const[student,setStudents]=useState({
        firstName:'',
        lasttName:'',
        email:'',
        department:'',

    })
    const{firstName,lastName,email,department}=student;
    const handleInputChange=(e)=>{
        setStudents({...student,[e.target.name]:e.target.value});
    }

    const saveStudent =async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/students",student);
        navigate("/view-students");
    }
  return (
    <div className='col-sm-8 py-2 px-5'>
        <form  onSubmit={(e)=>saveStudent(e)}>
            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='firstName'>
                    First Name      
                </label >
                <input className='form-control col-sm-6' type='text' name="firstName"  id='firstName' required value={firstName} 
                onChange={(e)=>handleInputChange(e)}>

                    
                </input>


            </div>
            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='lastName'>
                    Last Name       
                </label >
                <input className='form-control col-sm-6' type='text' name="lastName"  id='lastName' required value={lastName}
                onChange={(e)=>handleInputChange(e)}
                >
                    
                    
                </input>


            </div>
            <div className='input-group mb-5'>
  <label className='input-group-text' htmlFor='email'>
    Your Email     
  </label>
  <input 
    className='form-control col-sm-6' 
    type='email' // Specifies that the input is for an email address
    name="email"  
    id='email' 
    required // Makes the field required
    value={email}
    onChange={(e) => handleInputChange(e)}
    pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;"
 // Regular expression for email validation
    title="Please enter a valid email address." // Tooltip text for the pattern
  />
</div>

            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='department'>
                    Department      
                </label >
                <input className='form-control col-sm-6' type='text' name="department"  id='department' required value={department}
                onChange={(e)=>handleInputChange(e)}>
                    
                    
                </input>


            </div>

            <div className="row mb-5">
                <div className="col-sm-2">
                <button type='submit' className='btn btn-outline-success btn-lg'>
                    Save
                </button>
                </div>
                <div className="col-sm-2">
                <Link to={"/view-students"} type='submit' className='btn btn-outline-warning btn-lg'>
                    Cancel
                </Link >
                </div>
                
            </div>


          
        </form>
    </div>
  )
}

export default AddStudent