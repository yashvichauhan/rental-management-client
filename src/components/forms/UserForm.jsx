import React from 'react';
import axios from 'axios';

const UserForm = ({ user, setUser, fetchUsers }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = user._id ? `/api/admin/users/${user._id}` : '/api/admin/users';
        const method = user._id ? 'put' : 'post';

        try {
            await axios[method](endpoint, user, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setUser(null);
            fetchUsers();
        } catch (error) {
            console.error('Failed to submit user:', error);
            alert('Failed to process user data.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Full Name:
                <input type="text" name="fullName" value={user.fullName} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={user.email} onChange={handleChange} required />
            </label>
            <label>
                Role:
                <select name="role" value={user.role} onChange={handleChange} required>
                    <option value="">Select a role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <button type="submit">{user._id ? 'Update User' : 'Add User'}</button>
            <button onClick={() => setUser(null)}>Cancel</button>
        </form>
    );
};

export default UserForm;