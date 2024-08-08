import React from "react";
import "./about.css";

function About() {
    return (
        <section className="about-section">
            <div className="container">
                {/*<h1>About ClassCrest</h1>*/}
                <p>
                    Welcome to ClassCrest! Our application is designed to simplify and enhance the way teachers manage their students.
                    With ClassCrest, educators can easily handle student profiles, track progress, and foster a more organized and efficient classroom environment.
                </p>
                <h2>Our Mission</h2>
                <p>
                    Our mission is to empower teachers with the tools they need to manage their classrooms effectively.
                    We aim to create an intuitive and seamless experience that helps educators focus on what they do best – teaching.
                </p>
                <h2>Key Features</h2>
                <ul>
                    <li>Easy student profile management</li>
                    <li>Progress tracking and reporting</li>
                    <li>Communication tools for teachers and students</li>
                    <li>Customizable classroom settings</li>
                </ul>
                <h2>Our Values</h2>
                <ul>
                    <li>Education</li>
                    <li>Innovation</li>
                    <li>Collaboration</li>
                    <li>Integrity</li>
                </ul>
                <h2>Contact Us</h2>
                <p>
                    If you have any questions or need further information, please feel free to reach out to us at:
                </p>
                <p>
                    Email: support@classcrest.com<br />
                    Phone: 0374587235
                </p>
            </div>
        </section>
    );
}

export default About;
