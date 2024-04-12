import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = ({ onSubmitFeedback }) => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmitFeedback(feedback);
        setFeedback('');
    };

    return (
        <form onSubmit={handleSubmit} className='feedback-form'>
            <h3>Submit Feedback</h3>
            <textarea
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                placeholder="Enter your feedback..."
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FeedbackForm;
