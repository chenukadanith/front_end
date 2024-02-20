import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from "axios";

function EditStudent() {
    const { id } = useParams();
    let navigate = useNavigate();
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '', // Corrected typo
        email: '',
        department: '',
    });

    const { firstName, lastName, email, department } = student;

    const loadStudent = useCallback(async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/students/student/${id}`);
        setStudent(result.data);
    }, [id]); // Dependency array for useCallback

    useEffect(() => {
        loadStudent();
    }, [loadStudent, id]); // Including loadStudent and id in the dependency array

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const updateStudent = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/v1/students/update/${id}`, student);
        navigate("/view-students");
    };

    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
            <h2 className='mt-5'>Edit Student</h2>
            <form onSubmit={updateStudent}>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='firstName'>First Name</label>
                    <input className='form-control col-sm-6' type='text' name="firstName" id='firstName' required value={firstName} onChange={handleInputChange} />
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='lastName'>Last Name</label>
                    <input className='form-control col-sm-6' type='text' name="lastName" id='lastName' required value={lastName} onChange={handleInputChange} />
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='email'>Email</label>
                    <input className='form-control col-sm-6' type='text' name="email" id='email' required value={email} onChange={handleInputChange} />
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='department'>Department</label>
                    <input className='form-control col-sm-6' type='text' name="department" id='department' required value={department} onChange={handleInputChange} />
                </div>
                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button type='submit' className='btn btn-outline-success btn-lg'>Save</button>
                    </div>
                    <div className="col-sm-2">
                        <Link to="/view-students" className='btn btn-outline-warning btn-lg'>Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditStudent;
