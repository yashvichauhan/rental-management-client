import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
    const { isAuthenticated, user } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                return isAuthenticated && user && allowedRoles.includes(user.role)
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            }}
        />
    );
}

export default ProtectedRoute;
