import React from 'react';
import { Outlet } from 'react-router-dom'; // For nested routing if needed

import NavBar from "../component/common/NavBar"; // Assuming you have some styles for the layout

const MailLayout = () => {
    return (
        <>
            <NavBar/>
            <div className="main-content">
                <Outlet/>
            </div>
        </>
    );
};

export default MailLayout;
