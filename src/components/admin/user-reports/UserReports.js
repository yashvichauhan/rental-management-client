import React from 'react';
import './UserReports.css';

const UserReports = () => {
    const reports = [
        { title: "Total Users", value: "1,024" },
        { title: "Active Users", value: "820" },
        { title: "New Users This Month", value: "187" },
        { title: "User Retention", value: "90%" }
    ];

    return (
        <div className="user-reports">
            <h1>User Reports</h1>
            <div className="report-cards">
                {reports.map((report, index) => (
                    <div key={index} className="report-card">
                        <h2>{report.title}</h2>
                        <p>{report.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserReports;