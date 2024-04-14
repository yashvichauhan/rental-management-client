import React, { useEffect, useState } from 'react';
import axios from '../../../api/axios';
import './ManageUsers.css'
import UserForm from '../../forms/UserForm'

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/admin/users', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setUsers(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch users. Please check your connection and try again.');
            setLoading(false);
        }
    };

    const handleDeleteUser = async userId => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axios.delete(`/api/admin/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                fetchUsers();
            } catch (error) {
                console.error('Error deleting user:', error);
                alert('Failed to delete user.');
            }
        }
    };

    const handleEditUser = user => {
        setEditingUser(user);
    };

    const handleAddUser = () => {
        setEditingUser({ fullName: '', email: '', role: '' });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="manage-users">
            <h2>Manage Users</h2>
            <button onClick={handleAddUser} className="add-user-button">Add New User</button>
            <ul>
                {users.map(user => (
                    <li key={user._id} className="user-item">
                        {user.fullName} - {user.email} - Role: {user.role}
                        <button onClick={() => handleEditUser(user)} className="edit-user-button">Edit</button>
                        <button onClick={() => handleDeleteUser(user._id)} className="delete-user-button">Delete</button>
                    </li>
                ))}
            </ul>
            {editingUser && <UserForm user={editingUser} setUser={setEditingUser} fetchUsers={fetchUsers} />}
        </div>
    );
};

export default ManageUsers;
