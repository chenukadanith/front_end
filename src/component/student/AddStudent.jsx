import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddStudent.css';

function AddStudent() {
    let navigate = useNavigate();
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phoneNumber: '',
    });

    const { firstName, lastName, address, email, phoneNumber } = student;

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    const saveStudent = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/student/saveStudent", student);
        navigate("/view-students");
    }

    return (
        <div className='form-container col-sm-8 py-2 px-5'>
            <form onSubmit={saveStudent}>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='firstName'>
                        First Name
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        name="firstName"
                        id='firstName'
                        required
                        value={firstName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='lastName'>
                        Last Name
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        name="lastName"
                        id='lastName'
                        required
                        value={lastName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='email'>
                        Your Email
                    </label>
                    <input
                        className='form-control'
                        type='email'
                        name="email"
                        id='email'
                        required
                        value={email}
                        onChange={handleInputChange}
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                        title="Please enter a valid email address."
                    />
                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='address'>
                        Address
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        name="address"
                        id='address'
                        required
                        value={address}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='phoneNumber'>
                        Phone Number
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        name="phoneNumber"
                        id='phoneNumber'
                        required
                        value={phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button type='submit' className='btn btn-outline-success btn-lg'>
                            Save
                        </button>
                    </div>
                    <div className="col-sm-2">
                        <Link to={"/view-students"} className='btn btn-outline-warning btn-lg'>
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddStudent;
