import React from 'react';
import {UserContext} from '../../contexts/userContext';

const Profile: React.FC = () => {
    const {user} = React.useContext(UserContext);

    return (
        <div className="profile">
            <img
                className="profile_image"
                src={user.profile.picture}
            />
            <div>
                <p>Nom : {user.profile.lastName}</p>
                <p>Prénom : {user.profile.firstName}</p>
                <p>Poste : {user.profile.job}</p>
                <p>Date d'arrivée : {new Date(user.profile.arrivalDate).toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default Profile;