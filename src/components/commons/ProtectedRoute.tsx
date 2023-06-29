import React from 'react';
import {UserContext} from '../../contexts/userContext';
import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
    const {userProfile} = React.useContext(UserContext);

    if (!userProfile.userId) {
        return <Navigate to={'/'} />;
    }

    return <Outlet />;
}

export default ProtectedRoute;