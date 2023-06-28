import React from 'react';
import Profile from '../parts/Profile';
import MaterialList from '../parts/MaterialList';

const MaterialReservation: React.FC = () => {
    return (
        <>
            <div className="material">
                <Profile/>
                <MaterialList/>
            </div>
        </>
    );
}

export default MaterialReservation;