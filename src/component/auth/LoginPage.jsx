import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'; // Import Link from react-router-dom

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginData = { username, password };

        try {
            const response = await fetch('http://localhost:8080/api/v1/student/auth', { // Replace with your actual login endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const result = await response.json();
                if(result.code == 200){
                    localStorage.setItem("auth",true);
                    navigate("/");
                    // Handle successful login
                    console.log('Login successful:', result);
                }else{
                    localStorage.setItem("auth",false);
                }

            } else {
                // Handle error response
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            // Handle network errors
            console.error('Network error:', error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '300px' }}>
                <h3 className="text-center mb-4">Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <div className="text-center mt-3">
                    <p>Don't have an account?</p>
                    <Link to="/signup" className="btn btn-secondary w-100">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
