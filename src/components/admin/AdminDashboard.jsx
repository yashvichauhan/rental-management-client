import React from 'react';
import { Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import './AdminDashboard.css';
import ManageUsers from './manage-users/ManageUsers';
import SupportTickets from '../support-tickets/SupportTickets';
import UserReports from '../admin/user-reports/UserReports';

const AdminDashboard = () => {
    let { path } = useRouteMatch();

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <NavLink to={`${path}`} exact className="nav-button" activeClassName="active">Admin Home</NavLink>
                <NavLink to={`${path}/users`} className="nav-button" activeClassName="active">Manage Users</NavLink>
                <NavLink to={`${path}/tickets`} className="nav-button" activeClassName="active">Support Tickets</NavLink>
                <NavLink to={`${path}/reports`} className="nav-button" activeClassName="active">User Reports</NavLink>
                <NavLink to={`${path}/admin-users`} className="nav-button">Admin User Verification</NavLink>
            </div>
            <div className="dashboard-content">
                <Switch>
                    <Route exact path={path}>
                        <h1>Welcome to the Admin Dashboard</h1>
                    </Route>
                    <Route path={`${path}/users`} component={ManageUsers} />
                    <Route path={`${path}/tickets`} component={SupportTickets} />
                    <Route path={`${path}/reports`} component={UserReports} />
                </Switch>
            </div>
        </div>
    );
};

export default AdminDashboard;
