import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import PropertyManagement from './property-management/PropertyManagement';
import ActivityLog from './activity-log/ActivityLog';
import FeedbackForm from './feedback/FeedbackForm';
import AccountManagement from './account-management/AccountManagement';
import AddPropertyForm from './add-property/AddPropertyForm';
import Navbar from './NavBar';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('myListings');
    const [user, setUser] = useState(null);

    const [properties, setProperties] = useState([
        { id: 1, title: 'Sample Property 1', description: 'Lorem ipsum...', price: 200000, location: 'New York' },
        { id: 2, title: 'Sample Property 2', description: 'Lorem ipsum...', price: 300000, location: 'Los Angeles' },
    ]);
    const [activities] = useState([
        { id: 1, timestamp: '2024-04-12 10:00 AM', description: 'Property "Sample Property 1" updated' },
        { id: 2, timestamp: '2024-04-11 02:30 PM', description: 'Property "Sample Property 2" deleted' },
    ]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, []);

    // Function to delete a property
    const handleDeleteProperty = id => {
        setProperties(prevProperties => prevProperties.filter(property => property.id !== id));
    };

    // Function to submit feedback
    const handleSubmitFeedback = feedback => {
        console.log('Feedback submitted:', feedback);
    };

    return (
        <div className="dashboard-container">
            <Navbar setActiveTab={setActiveTab} />
            <div className="dashboard-content">
                <h1>{activeTab.replace(/([A-Z])/g, ' $1').trim()}</h1>
                {/* Conditionally render components based on activeTab */}
                {activeTab === 'myListings' && <PropertyManagement properties={properties} onDeleteProperty={handleDeleteProperty} />}
                {activeTab === 'activityLog' && <ActivityLog activities={activities} />}
                {activeTab === 'feedback' && <FeedbackForm onSubmitFeedback={handleSubmitFeedback} />}
                {activeTab === 'accountManagement' && <AccountManagement user={user} />}
                {activeTab === 'addPropertyForm' && <AddPropertyForm user={user} />}
            </div>
        </div>
    );
};

export default Dashboard;
