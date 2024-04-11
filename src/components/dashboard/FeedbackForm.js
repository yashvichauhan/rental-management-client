import React, { useState } from 'react';

const FeedbackForm = ({ onSubmitFeedback }) => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmitFeedback(feedback);
        setFeedback('');
    };

    return (
        <form onSubmit={handleSubmit}>
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
