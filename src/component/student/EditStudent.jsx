import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

function EditStudent() {
    const { id } = useParams();
    let navigate = useNavigate();
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phoneNumber: '',
    });

    const { firstName, lastName, email, address, phoneNumber } = student;

    const loadStudent = useCallback(async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/student/getStudentById?id=${id}`);
            setStudent(result.data.data); // Adjust this if the response structure is different
        } catch (error) {
            console.error("Error fetching the student details:", error);
        }
    }, [id]);

    useEffect(() => {
        loadStudent();
    }, [loadStudent]);

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const updateStudent = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/v1/student/updateStudent`, student);
            navigate("/view-students");
        } catch (error) {
            console.error("Error updating the student details:", error);
        }
    };

    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
            <h2 className='mt-5'>Edit Student</h2>
            <form onSubmit={updateStudent}>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='firstName'>First Name</label>
                    <input className='form-control col-sm-6' type='text' name="firstName" id='firstName' required
                           value={firstName} onChange={handleInputChange}/>
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='lastName'>Last Name</label>
                    <input className='form-control col-sm-6' type='text' name="lastName" id='lastName' required
                           value={lastName} onChange={handleInputChange}/>
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='email'>Email</label>
                    <input className='form-control col-sm-6' type='text' name="email" id='email' required value={email}
                           onChange={handleInputChange}/>
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='address'>Address</label>
                    <input className='form-control col-sm-6' type='text' name="address" id='address' required
                           value={address} onChange={handleInputChange}/>
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='phoneNumber'>Phone Number</label>
                    <input className='form-control col-sm-6' type='text' name="phoneNumber" id='phoneNumber' required
                           value={phoneNumber} onChange={handleInputChange}/>
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
