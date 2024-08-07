import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function StudentProfile() {
    const { id } = useParams();
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
    });

    const loadStudent = useCallback(async () => {
        try {
            console.log(`Fetching data for student ID: ${id}`);
            const result = await axios.get(`http://localhost:8080/api/v1/student/getStudentById?id=${id}`);
            console.log("API response:", result.data);
            if (result.data && result.data.data) {
                setStudent(result.data.data);
            } else {
                console.error("Unexpected API response structure:", result.data);
            }
        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    }, [id]);

    useEffect(() => {
        loadStudent();
    }, [loadStudent]);

    useEffect(() => {
        console.log("Updated student state:", student);
    }, [student]);

    return (
        <section className="shadow">
            <div className="container">
                <div className="profile-header">
                    <h2>{student.firstName && student.lastName ? `${student.firstName} ${student.lastName}` : "Loading..."}</h2>
                </div>
                <div className="profile-body">
                    <div className="profile-details">
                        <div className="detail-item">
                            <span>First Name</span>
                            <p>{student.firstName || "Loading..."}</p>
                        </div>
                        <div className="detail-item">
                            <span>Last Name</span>
                            <p>{student.lastName || "Loading..."}</p>
                        </div>
                        <div className="detail-item">
                            <span>Email</span>
                            <p>{student.email || "Loading..."}</p>
                        </div>
                        <div className="detail-item">
                            <span>Address</span>
                            <p>{student.address || "Loading..."}</p>
                        </div>
                        <div className="detail-item">
                            <span>Phone Number</span>
                            <p>{student.phoneNumber || "Loading..."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudentProfile;
