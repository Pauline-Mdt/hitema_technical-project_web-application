import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/commons/Layout';
import Home from './components/pages/Home';
import Submission from './components/pages/Submission';
import MaterialReservation from './components/pages/MaterialReservation';
import ProtectedRoute from './components/commons/ProtectedRoute';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Submission />} />
                <Route path="registration" element={<Submission />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="material-reservation" element={<MaterialReservation />} />
                </Route>
                <Route path="*" />
            </Route>
        </Routes>
    );
}

export default App;
