import React from 'react';
import { Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import './AdminDashboard.css';
import ManageUsers from './manage-users/ManageUsers';

const AdminDashboard = () => {
    let { path } = useRouteMatch();

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <NavLink to={`${path}`} exact className="nav-button" activeClassName="active">Admin Home</NavLink>
                <NavLink to={`${path}/users`} className="nav-button" activeClassName="active">Manage Users</NavLink>
            </div>
            <div className="dashboard-content">
                <Switch>
                    <Route exact path={path}>
                        <h1>Welcome to the Admin Dashboard</h1>
                    </Route>
                    <Route path={`${path}/users`} component={ManageUsers} />
                </Switch>
            </div>
        </div>
    );
};

export default AdminDashboard;