import React from 'react';

const ActivityLog = ({ activities }) => {
    return (
        <div>
            <h3>Activity Log</h3>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>
                        {activity.timestamp}: {activity.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityLog;
