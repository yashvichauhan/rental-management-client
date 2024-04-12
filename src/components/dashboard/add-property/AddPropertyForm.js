import React, { useState } from 'react';
import './AddPropertyForm.css'; // Import CSS file

const AddPropertyForm = ({ onAddProperty }) => {
    const [property, setProperty] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        image: null // Add an image field to your state
    });

    const handleChange = e => {
        const { name, type, value, files } = e.target;
        if (type === 'file') {
            // If the changed element is file input, we'll update the image state
            setProperty(prevState => ({
                ...prevState,
                image: files[0] // We're assuming here that the user can only pick one image
            }));
        } else {
            // For other input types, just save the value
            setProperty(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Validate form data
        if (!property.title || !property.description || !property.price || !property.location || !property.image) {
            alert('Please fill in all fields and select an image.');
            return;
        }
        // Add property, you might need to handle the image upload appropriately
        onAddProperty(property);
        // Clear form fields
        setProperty({
            title: '',
            description: '',
            price: '',
            location: '',
            image: null
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
            <div>
                <label>Image:</label>
                <input type="file" name="image" onChange={handleChange} />
            </div>
            <button type="submit">Add Property</button>
        </form>
    );
};

export default AddPropertyForm;
