import React, { useState } from 'react';
import { Container, Card, Form, Button, Col } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

const AddProperty = () => {
  const navigate  = useNavigate();
  const [propertyData, setPropertyData] = useState({
    name: '',
    bedrooms: '',
    rentAmount: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle property submission
    console.log('Property submitted:', propertyData);
    navigate('/dashboard');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 56px)' }}>
      <Col md={6}>
        <Card className="p-4">
          <Card.Body>
            <h2 className="text-center mb-4">Add Property</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label className='mb-0'>Property Name</Form.Label>
                <Form.Control type="text" placeholder="Enter property name" name="name" value={propertyData.name} onChange={handleInputChange} required />
              </Form.Group>
              <br/>

              <Form.Group controlId="bedrooms">
                <Form.Label className='mb-0'>Number of Bedrooms</Form.Label>
                <Form.Control type="number" placeholder="Enter number of bedrooms" name="bedrooms" value={propertyData.bedrooms} onChange={handleInputChange} required />
              </Form.Group>
              <br/>

              <Form.Group controlId="rentAmount">
                <Form.Label className='mb-0'>Rent Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter rent amount" name="rentAmount" value={propertyData.rentAmount} onChange={handleInputChange} required />
              </Form.Group>
              <br/>

              <Form.Group controlId="location">
                <Form.Label className='mb-0'>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter location" name="location" value={propertyData.location} onChange={handleInputChange} required />
              </Form.Group>
              <br/>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Add Property
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default AddProperty;
