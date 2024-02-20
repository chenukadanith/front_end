import React, { useEffect, useState } from 'react'
import axios  from  "axios";
import {FaEye, FaTrashAlt} from "react-icons/fa";

import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Search from '../common/Search';



function StudentsView() {


    const [students,setStudents]=useState([]);
    const[search,setSearch]=useState("");
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

const handleDelete=async(id)=>{
    await axios.delete(`http://localhost:8080/api/v1/students/delete/${id}`);
    loadStudents();
}



  return (
   
    <section>
        <Search search={search} setSearch={setSearch}/>
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
  {students.filter((st) =>
    st.firstName.toLowerCase().includes(search.toLowerCase())
  ).map((student, index) => (
    <tr key={student.id}>
      <th scope='row'>
        {index + 1}
      </th>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.email}</td>
      <td>{student.department}</td>
      <td className="mx-1">
        <Link to={`/student-profile/${student.id}`} className='btn btn-info btn-sm'><FaEye /></Link>
      </td>
      <td className="mx-1">
        <Link to={`/edit-student/${student.id}`} className='btn btn-warning btn-sm'><FaEdit /></Link>
      </td>
      <td className="mx-1">
        <button className='btn btn-danger btn-sm' onClick={() => handleDelete(student.id)}><FaTrashAlt/></button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
    </section>
  )
}

export default StudentsView