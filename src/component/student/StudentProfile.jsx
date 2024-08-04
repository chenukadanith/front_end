import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import './StudentProfile.css'; // Importing CSS for styling

function StudentProfile() {
    const { id } = useParams();
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
    });

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = useCallback(async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/student/getStudentById?id=${id}`);
        setStudent(result.data);
    }, [id]);

    return (
        <section className="shadow">
            <div className="container">
                <div className="profile-header">
                    <h2>{`${student.firstName} ${student.lastName}`}</h2>
                </div>
                <div className="profile-body">
                    
                    <div className="profile-details">
                        <div className="detail-item">
                            <span>First Name</span>
                            <p>{student.firstName}</p>

                        </div>
                        <div className="detail-item">
                            <span>Last Name</span>
                            <p>{student.lastName}</p>
                        </div>
                        <div className="detail-item">
                            <span>Email</span>
                            <p>{student.email}</p>
                        </div>
                        <div className="detail-item">
                            <span>Department</span>
                            <p>{student.department}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentProfile;
