import React, { useState } from 'react';

const AccountManagement = ({ user }) => {
    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        password: '',
        newPassword: '',
        confirmPassword: '',
        notificationPreferences: false // Example checkbox for notification preferences
    });

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Implement logic to update user's account settings
        console.log('Form data:', formData);
    };

    return (
        <div>
            <h3>Account Management</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>New Password:</label>
                    <input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="notificationPreferences"
                            checked={formData.notificationPreferences}
                            onChange={handleChange}
                        />
                        Receive notifications
                    </label>
                </div>
                <button type="submit">Update Account</button>
            </form>
        </div>
    );
};

export default AccountManagement;
