import React from 'react';
import {useNavigate} from 'react-router-dom';
import {UserContext, userProfileInitialState} from '../../contexts/userContext';

const Home: React.FC = () => {
    const {setUserProfile} = React.useContext(UserContext);
    const navigate = useNavigate();

    const handleNavigate = (paht: string) => {
        setUserProfile(userProfileInitialState)
        navigate(paht)
    }

    return (
        <div className="home">
            <p>
                <button type="button" className="button" onClick={() => handleNavigate('/login')}>S'identifier</button>
            </p>
            <p>
                <button type="button" className="button" onClick={() => handleNavigate('/registration')}>S'inscrire</button>
            </p>
        </div>
    );
}

export default Home;