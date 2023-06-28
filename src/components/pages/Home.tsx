import React from 'react';
import {useNavigate} from 'react-router-dom';
import {UserContext, userItitialState} from '../../contexts/userContext';

const Home: React.FC = () => {
    const {setUser} = React.useContext(UserContext);
    const navigate = useNavigate();

    const handleNavigate = (paht: string) => {
        setUser(userItitialState)
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