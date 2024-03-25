import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [userRole, setUserRole] = useState('');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleRadioChange = (e) => {
      setUserRole(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission, including role information
      console.log('Form submitted:', formData, 'Role:', userRole);
      navigate('/dashboard');
    };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 56px)' }}>
      <Card className="p-4">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label className='mb-0'>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
            </Form.Group>
            <br/>
            <Form.Group controlId="lastName">
              <Form.Label className='mb-0'>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
            </Form.Group>
            <br/>
            <Form.Group controlId="email">
              <Form.Label className='mb-0'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleInputChange} required />
            </Form.Group>
            <br/>
            <Form.Group controlId="password">
              <Form.Label className='mb-0'>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} required />
            </Form.Group>
            <br/>
            <Form.Group controlId="userRole">
              <Form.Label className='mb-0'>Role</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Landowner"
                  name="userRole"
                  value="Landowner"
                  checked={userRole === 'Landowner'}
                  onChange={handleRadioChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Buyer"
                  name="userRole"
                  value="Buyer"
                  checked={userRole === 'Buyer'}
                  onChange={handleRadioChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Renter"
                  name="userRole"
                  value="Renter"
                  checked={userRole === 'Renter'}
                  onChange={handleRadioChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Real Estate Agent"
                  name="userRole"
                  value="RealEstateAgent"
                  checked={userRole === 'RealEstateAgent'}
                  onChange={handleRadioChange}
                />
              </div>
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignIn;
