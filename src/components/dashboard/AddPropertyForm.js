import React, { useState } from 'react';
import './AddPropertyForm.css'; // Import CSS file

const AddPropertyForm = ({ onAddProperty }) => {
    const [property, setProperty] = useState({
        title: '',
        description: '',
        price: '',
        location: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setProperty(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Validate form data
        if (!property.title || !property.description || !property.price || !property.location) {
            alert('Please fill in all fields.');
            return;
        }
        // Add property
        onAddProperty(property);
        // Clear form fields
        setProperty({
            title: '',
            description: '',
            price: '',
            location: ''
        });
    };

    return (
        <form className="add-property-form" onSubmit={handleSubmit}>
            <h3>Add New Property</h3>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={property.title} onChange={handleChange} />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={property.description} onChange={handleChange} />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={property.price} onChange={handleChange} />
            </div>
            <div>
                <label>Location:</label>
                <input type="text" name="location" value={property.location} onChange={handleChange} />
            </div>
            <button type="submit">Add Property</button>
        </form>
    );
};

export default AddPropertyForm;
