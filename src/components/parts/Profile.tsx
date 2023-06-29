import React from 'react';
import {UserContext} from '../../contexts/userContext';
import {getUser} from '../../services/api';

const Profile: React.FC = () => {
    const {userProfile, setUserProfile} = React.useContext(UserContext);

    React.useEffect(() => {
        getUser(userProfile.userId).then((result) => {
            setUserProfile(result);
        });
    }, [])

    return (
        <div className="profile">
            <img
                className="profile_image"
                src={userProfile.picture}
            />
            <div>
                <p>Nom : {userProfile.lastname}</p>
                <p>Prénom : {userProfile.firstname}</p>
                <p>Poste : {userProfile.role}</p>
                {
                    userProfile.dateinscription && <p>Date d'arrivée : {new Date(userProfile.dateinscription).toLocaleDateString()}</p>
                }
            </div>
        </div>
    )
}

export default Profile;