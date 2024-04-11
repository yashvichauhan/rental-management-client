import React from 'react';

const PropertyManagement = ({ properties, onDeleteProperty }) => {
    return (
        <div>
            <h3>My Properties</h3>
            {properties.map(property => (
                <div key={property.id}>
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
