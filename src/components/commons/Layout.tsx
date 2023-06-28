import {Outlet} from 'react-router-dom';
import React from 'react';
import Header from './Header';

const Layout: React.FC = () => {
    return (
        <div className="layout">
            <Header/>
            <Outlet/>
        </div>
    );
}

export default Layout;