import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import './SupportTickets.css';
const SupportTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [responseText, setResponseText] = useState({});

    const handleResponseChange = (ticketId, text) => {
        setResponseText(prev => ({ ...prev, [ticketId]: text }));
    };

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = async () => {
        try {
            const result = await axios.get('/api/admin/tickets', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(result.data);
            setTickets(result.data);
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };

    const submitResponse = async (ticketId) => {
        try {
            const responseToSend = responseText[ticketId];
            if (!responseToSend.trim()) {
                alert("Please enter a response.");
                return;
            }
            await axios.put(`/api/admin/tickets/${ticketId}`,
                { response: responseToSend },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            setResponseText(prev => ({ ...prev, [ticketId]: '' }));
            fetchTickets();
        } catch (error) {
            console.error('Error responding to ticket:', error);
            alert('Failed to submit response.');
        }
    };

    const closeTicket = async (ticketId) => {
        try {
            await axios.put(`/api/admin/tickets/${ticketId}/close`, {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            fetchTickets();
        } catch (error) {
            console.error('Error closing ticket:', error);
            alert('Failed to close ticket.');
        }
    };


    return (
        <div className="support-tickets-container">
            <h2>Support Ticket Management</h2>
            {tickets.map(ticket => (
                <div className={`ticket ${ticket.status === 'closed' ? 'closed' : ''}`} key={ticket._id}>
                    <div className="ticket-header">
                        <span className="ticket-id">Ticket ID: {ticket._id}</span>
                        <span className={`ticket-status ${ticket.status === 'closed' ? 'closed' : ''}`}>Status: {ticket.status}</span>
                    </div>
                    <div className="ticket-body">
                        <p><strong>User ID:</strong> {ticket.user?._id}</p>
                        <p><strong>User Name:</strong> {ticket.user?.fullName}</p>
                        <p><strong>Description:</strong> {ticket.description}</p>
                        <p><strong>Created At:</strong> {new Date(ticket.createdAt).toLocaleString()}</p>
                        <p><strong>Last Updated:</strong> {new Date(ticket.updatedAt).toLocaleString()}</p>
                    </div>
                    <div className="ticket-footer">
                        {ticket.responses.length > 0 && (
                            <div>
                                <h4>Responses:</h4>
                                {ticket.responses.map((resp, index) => (
                                    <p key={index}>{resp.text}</p>
                                ))}
                            </div>
                        )}
                        <textarea
                            value={responseText[ticket._id] || ''}
                            onChange={(e) => handleResponseChange(ticket._id, e.target.value)}
                            placeholder="Type your response"
                        />
                        <button onClick={() => submitResponse(ticket._id)}>Submit Response</button>
                        {ticket.status === 'open' && (
                            <button onClick={() => closeTicket(ticket._id)}>Close Ticket</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SupportTickets;
