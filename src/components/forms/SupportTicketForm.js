import React, { useState } from 'react';
import axios from '../../api/axios';
import './SupportTicketForm.css';

const SupportTicketForm = () => {
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess(false);

        try {
            await axios.post('/api/support/tickets', { description }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setDescription('');
            setSuccess(true);
        } catch (err) {
            setError('Failed to submit the ticket. Please try again.');
            console.error('Error submitting ticket:', err);
        }
    };

    return (
        <div className="support-ticket-form">
            <h2>Submit a Support Ticket</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Describe your issue"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">Ticket submitted successfully!</p>}
        </div>
    );
};

export default SupportTicketForm;
