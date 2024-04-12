import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setActiveTab }) => {
    const [showAddPropertyForm, setShowAddPropertyForm] = useState(false);

    const handleTabClick = tab => {
        setActiveTab(tab);
        if (tab === 'addProperty') {
            setShowAddPropertyForm(true);
        } else {
            setShowAddPropertyForm(false);
        }
    };

    return (
        <div className="sidebar"> {/* Updated class name */}
            <button onClick={() => handleTabClick('myListings')}>My Listings</button>
            <button onClick={() => handleTabClick('activityLog')}>Activity Log</button>
            <button onClick={() => handleTabClick('feedback')}>Feedback</button>
            <button onClick={() => handleTabClick('accountManagement')}>Account Management</button>
            <button onClick={() => handleTabClick('addPropertyForm')}>Add Property</button>
        </div>
    );
};

export default Navbar;
