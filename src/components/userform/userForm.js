import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function UserForm() {
    const { userId } = useParams(); // Get the ID from URL
    const history = useHistory();
    const [user, setUser] = useState({ name: '', email: '', password: '' });

    useEffect(() => {
        if (userId) {
            async function fetchUser() {
                try {
                    const { data } = await axios.get(`/api/users/${userId}`);
                    setUser(data);
                } catch (error) {
                    console.error('Failed to fetch user:', error);
                }
            }
            fetchUser();
        }
    }, [userId]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (userId) {
                await axios.put(`/api/users/${userId}`, user);
            } else {
                await axios.post('/api/users', user);
            }
            history.push('/admin/users');
        } catch (error) {
            console.error('Failed to save user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={user.name} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={user.email} onChange={handleChange} required />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={user.password} onChange={handleChange} required />
            </label>
            <button type="submit">{userId ? 'Update User' : 'Add User'}</button>
        </form>
    );
}

export default UserForm;
