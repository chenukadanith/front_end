import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEye, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Search from '../common/Search';
import "./StudentsView.css"

function StudentsView() {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState('');
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        loadStudents(currentPage, 10);
    }, [currentPage]);

    const loadStudents = async (page, size) => {
        try {
            const result = await axios.get("http://localhost:8080/api/v1/student/veiwAllStudents", {
                params: {
                    page: page,
                    size: size,
                },
                validateStatus: () => true,
            });

            if (result.status === 200) {
                const { data } = result.data;
                setStudents(data.list);
                setTotalItems(data.totalItems);
                setCurrentPage(data.currentPage);
                setTotalPages(data.totalPages);
            } else {
                console.error("Failed to load students", result);
            }
        } catch (error) {
            console.error("There was an error loading the students!", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/students/delete/${id}`);
            loadStudents(currentPage, 10);
        } catch (error) {
            console.error("There was an error deleting the student!", error);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className="section">
            <Search search={search} setSearch={setSearch} />
            <table className="table table-bordered table-hover">
                <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th colSpan="3">Actions</th>
                </tr>
                </thead>
                <tbody className="text-center">
                {students
                    .filter((st) =>
                        st.firstName.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((student, index) => (
                        <tr key={student.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.address}</td>
                            <td className="mx-1">
                                <Link to={`/student-profile/${student.id}`} className="btn btn-info btn-sm">
                                    <FaEye />
                                </Link>
                            </td>
                            <td className="mx-1">
                                <Link to={`/edit-student/${student.id}`} className="btn btn-warning btn-sm">
                                    <FaEdit />
                                </Link>
                            </td>
                            <td className="mx-1">
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student.id)}>
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0}>
                    Previous
                </button>
                <span> Page {currentPage + 1} of {totalPages} </span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages - 1}>
                    Next
                </button>
            </div>
        </section>
    );
}

export default StudentsView;
