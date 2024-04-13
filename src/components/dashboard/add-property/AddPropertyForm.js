import React, { useState } from 'react';
import './AddPropertyForm.css';

const AddPropertyForm = () => {
    const [property, setProperty] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        image: null
    });

    const handleChange = e => {
        const { name, type, value, files } = e.target;
        if (type === 'file') {
            setProperty(prevState => ({
                ...prevState,
                image: files[0]
            }));
        } else {
            setProperty(prevState => ({
                ...prevState,
                [name]: name === 'price' ? parseFloat(value) || '' : value
            }));
        }
    };

    const handleAddProperty = async (property) => {
        const formData = new FormData();

        formData.append('title', property.title);
        formData.append('description', property.description);
        formData.append('price', property.price);
        formData.append('location', property.location);
        formData.append('image', property.image);

        try {
            const response = await fetch('http://localhost:5000/api/properties', {
                method: 'POST',
                body: formData,
            });

            const responseBody = await response.json();

            if (!response.ok) {
                const message = `An error has occurred: ${responseBody.message || response.statusText}`;
                throw new Error(message);
            }

            alert('Property added successfully!');
            console.log('Server Response:', responseBody);

        } catch (error) {
            console.error('Failed to add property:', error);
            alert(`Failed to add property: ${error.message}`);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!property.title || !property.description || !property.price || !property.location || !property.image) {
            alert('Please fill in all fields and select an image.');
            return;
        }
        handleAddProperty(property);
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
                <label htmlFor="title">Title:</label>
                <input id="title" type="text" name="title" value={property.title} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={property.description} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input id="price" type="number" name="price" value={property.price} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input id="location" type="text" name="location" value={property.location} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input id="image" type="file" name="image" onChange={handleChange} />
            </div>
            <button type="submit">Add Property</button>
        </form>
    );
};

export default AddPropertyForm;
