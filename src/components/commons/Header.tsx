import React from 'react';
import logo from '../../assets/images/MaxAirain-logo.png';
import {useLocation, useNavigate} from 'react-router-dom';
import {UserContext, userProfileInitialState, userReservationInitialState} from '../../contexts/userContext';
import {APP_NAME} from '../../utils/constants';

const Header: React.FC = () => {
    const path: string|undefined = useLocation().pathname.split('/').pop();
    let page;
    switch (path) {
        case '':
            page = 'Accueil';
            break;

        case 'login':
            page = 'Identification';
            break;

        case 'registration':
            page = 'Inscription';
            break;

        case 'material-reservation':
            page = 'Réservation du matériel';
            break;

        default:
            page = 'Erreur 404 - Page non trouvée';
            break;
    }
    const isHome = path === '';
    const {setUserProfile, setUserReservation} = React.useContext(UserContext);
    const navigate = useNavigate();

    const handleReturn = () => {
        setUserProfile(userProfileInitialState);
        setUserReservation(userReservationInitialState);
        navigate(-1)
    }

    return (
        <>
            <header className="header">
                <div className="header_brand">
                    <img
                        src={logo}
                        height={100}
                        width="auto"
                        alt={"Logo "+APP_NAME}
                    />
                    <h1>{APP_NAME}</h1>
                </div>
                <div>
                    {
                        !isHome && (
                            <nav>
                                <button type="button" className="button" onClick={handleReturn}>Retour</button>
                            </nav>
                        )
                    }
                    <h2>{page}</h2>
                </div>
            </header>
        </>
    );
}

export default Header;