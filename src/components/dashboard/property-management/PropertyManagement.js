import React from 'react';
import './PropertyManagement.css';

const PropertyManagement = ({ properties, onDeleteProperty }) => {
    return (
        <div className="property-management">
            <h3>My Properties</h3>
            {properties.map(property => (
                <div key={property.id} className="property-item">
                    <img src={property.imageUrl} alt={property.title} className="property-image" />
                    <h4>{property.title}</h4>
                    <p>Description: {property.description}</p>
                    <p>Price: ${property.price}</p>
                    <p>Location: {property.location}</p>
                    <button onClick={() => onDeleteProperty(property.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default PropertyManagement;
