import React from 'react';
import { Navbar, Nav, Container, Table } from 'react-bootstrap';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Rental Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">Logout</Nav.Link>
              <Nav.Link href="/addproperty">Add Property</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <h2>Buyers/Renters List</h2>
        <List />
      </Container>
    </div>
  );
};

export default Dashboard;
