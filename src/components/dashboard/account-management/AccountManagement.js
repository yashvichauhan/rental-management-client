import React, { useState } from 'react';
import './AccountManagement.css';

const AccountManagement = ({ user }) => {
    const [formData, setFormData] = useState({
        username: user.fullName,
        email: user.email,
        password: '',
        newPassword: '',
        confirmPassword: '',
        notificationPreferences: false
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

        if (formData.newPassword !== formData.confirmPassword) {
            alert("New passwords do not match.");
            return;
        }

        const updateData = {
            email: formData.email,
            newPassword: formData.newPassword,
        };

        updateAccount(updateData);
    };

    const updateAccount = async (data) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/update-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            if (!response.ok) {
                throw new Error(json.message || 'Failed to update account');
            }
            alert('Account updated successfully!');
        } catch (error) {
            console.error('Failed to update account:', error);
            alert(`Failed to update account: ${error.message}`);
        }
    };

    return (
        <div className="account-management">
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
