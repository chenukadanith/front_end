import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./StudentProfile.css"; // Assuming you have a CSS file for custom styling

function StudentProfile() {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            setError("Failed to load student data.");
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        loadStudent();
    }, [loadStudent]);

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!student) {
        return <div className="error">No student found.</div>;
    }

    return (
        <section className="shadow student-profile">
            <div className="container">
                <div className="profile-header">
                    <h2>{student.firstName} {student.lastName}</h2>
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
                            <span>Address</span>
                            <p>{student.address || "N/A"}</p>
                        </div>
                        <div className="detail-item">
                            <span>Phone Number</span>
                            <p>{student.phoneNumber || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudentProfile;
