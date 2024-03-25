import React from 'react';
import { Table } from 'react-bootstrap';

const BuyersRenterList = () => {
  // Assuming buyers/renters data is received as props or fetched from an API
  const buyersRenterData = [
    { id: 1, name: 'John Doe', type: 'Buyer' },
    { id: 2, name: 'Jane Smith', type: 'Renter' },
    // Add more data as needed
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {buyersRenterData.map((buyerRenter, index) => (
          <tr key={index}>
            <td>{buyerRenter.id}</td>
            <td>{buyerRenter.name}</td>
            <td>{buyerRenter.type}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BuyersRenterList;
