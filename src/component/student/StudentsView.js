import React, { useEffect, useState } from 'react'
import axios  from  "axios";


function StudentsView() {

    const [students,setStudents]=useState([]);
    useEffect(()=>{
        loadStudents();
    },[]);
    const loadStudents = async()=>{
        const reslult= await axios.get("http://localhost:8080/api/v1/students",
        
        {
            validateStatus:()=>{
                return true;
            },
        }
        );
        if (reslult.status === 302){
            setStudents(reslult.data);
        }
        
    
    }
  return (
   
    <section>
        <table className='table table-bordered table-hover'>
            <thead>
                <tr className='text-center'>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th colSpan="3">Actions</th>
                </tr>
               
                
            </thead>
            <tbody className='text-center'>
                {students.map((student,index)=>(
                      <tr key={student.id}>
                        <th scope='row' key={index}>
                            {index+1}
                        </th>

                      <td>{student.firstName}</td>
                      <td>{student.lastName}</td>
                      <td>{student.email}</td>
                      <td>{student.department}</td>
                      <td className="mx-1">
                        
                        <button className='btn btn-info btn-sm'> View </button>
                        </td>
                        <td className="mx-1">
                        
                        <button className='btn btn-warning btn-sm'>Update</button>
                        </td>
                        <td className="mx-1">
                        
                        <button className='btn btn-danger btn-sm'>Delete</button>
                        </td>
                  </tr>
                ))}
          
            </tbody>
        </table>
    </section>
  )
}

export default StudentsView