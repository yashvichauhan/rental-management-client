import React, { useState } from 'react';


const Navbar = ({ setActiveTab, handleAddProperty }) => {
    const [showAddPropertyForm, setShowAddPropertyForm] = useState(false);

    const toggleAddPropertyForm = () => {
        setShowAddPropertyForm(prevState => !prevState);
    };

    const handleTabClick = tab => {
        setActiveTab(tab);
        if (tab === 'addProperty') {
            setShowAddPropertyForm(true);
        } else {
            setShowAddPropertyForm(false);
        }
    };

    const handleSubmitProperty = newProperty => {
        handleAddProperty(newProperty);
        setActiveTab('addProperty');
        setShowAddPropertyForm(false); // Hide the form after submission
    };

    return (
        <div className="navbar">
            <button onClick={() => handleTabClick('myListings')}>My Listings</button>
            <button onClick={() => handleTabClick('activityLog')}>Activity Log</button>
            <button onClick={() => handleTabClick('feedback')}>Feedback</button>
            <button onClick={() => handleTabClick('accountManagement')}>Account Management</button>
            <button onClick={() => handleTabClick('addProperty')}>Add Property</button>
            {showAddPropertyForm && (
                <div className="add-property-form widget">
                    <h3>Add Property</h3>
                    <label>Title</label>
                    <input type="text" />
                    <label>Description</label>
                    <textarea></textarea>
                    <label>Price</label>
                    <input type="number" />
                    <label>Location</label>
                    <input type="text" />
                    <button onClick={handleSubmitProperty}>Add</button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
