import React from 'react';
import logo from '../../assets/images/MaxAirain-logo.png';
import {useLocation, useNavigate} from 'react-router-dom';

const Header: React.FC = () => {
    const path: string|undefined = useLocation().pathname.split('/').pop();
    let page;
    switch (path) {
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
            page = 'Accueil';
            break;
    }
    const isHome = path === '';
    const navigate = useNavigate();

    return (
        <>
            <header className="header">
                <div className="header_brand">
                    <img
                        src={logo}
                        height={100}
                        width="auto"
                        alt="Logo MaxAirain"
                    />
                    <h1>MaxAirain</h1>
                </div>
                <div>
                    {
                        !isHome && (
                            <nav>
                                <button type="button" className="button" onClick={() => navigate(-1)}>Retour</button>
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