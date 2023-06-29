import React from 'react';
import {UserContext} from '../../contexts/userContext';
import {useLocation, useNavigate} from 'react-router-dom';
import Loader from './Loader';

const UserForm: React.FC = () => {
    const {user, setUser} = React.useContext(UserContext);
    const path: string|undefined = useLocation().pathname.split('/').pop();
    const isNew = path === 'registration';
    const jobsList = [
        'Agent de sécurité',
        'Agent de surveillance',
        'Agent de gardiennage',
        'Agent de protection',
    ];
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const navigate = useNavigate();

    const generateRandomBoolean = () => {
        return Math.random() < 0.5; // 50% de chance de retourner true ou false
    };
    const randomBoolean = generateRandomBoolean();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        event.preventDefault();
        setUser({...user, profile : {...user.profile, [event.target.name]: event.target.value}});
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (user.profile.picture === '') {
            alert('Veuillez prendre une photo s\'il vous plait');
            return;
        }

        if (isNew) {
            for (const property in user.profile ) {
                if (user.profile[property] === '') {
                    alert('Veuillez remplir tous les champs s\'il vous plait');
                    return;
                }
            }

            // setIsLoading(true);
            // TODO: send new user to API

            randomBoolean ? navigate('/') : alert('Erreur lors de l\'enregistrement de l\'utilisateur');
        } else {
            // setIsLoading(true);
            // TODO: check authentification picture

            randomBoolean ? navigate('/material-reservation') : alert('Erreur lors de l\'identification de l\'utilisateur');
        }
    }

    return (
        isLoading ?
            <Loader />
            : (
                <form className="form" onSubmit={handleSubmit}>
                    <img
                        className="profile_image"
                        src={user.profile.picture}
                    />
                    {
                        isNew && (
                            <>
                                <p className="form_row">
                                    <label htmlFor="lastName">Nom</label>
                                    <input type="text" id="lastName" name="lastName" required
                                           value={user.profile.lastName}
                                           onChange={event => handleChange(event)} />
                                </p>
                                <p className="form_row">
                                    <label htmlFor="firstName">Prénom</label>
                                    <input type="text" id="firstName" name="firstName" required
                                           value={user.profile.firstName}
                                           onChange={event => handleChange(event)} />
                                </p>
                                <p className="form_row">
                                    <label htmlFor="job">Poste</label>
                                    <select id="job" name="job" required
                                            value={user.profile.firstName}
                                            onChange={event => handleChange(event)}>
                                        <option disabled value="">Choisir un poste</option>
                                        {
                                            jobsList.map((job, index) => {
                                                return <option key={index} value={job}>{job}</option>
                                            })
                                        }
                                    </select>
                                </p>
                                <p className="form_row">
                                    <label htmlFor="arrivalDate">Date d'arrivée</label>
                                    <input type="date" id="arrivalDate" name="arrivalDate" required
                                           value={user.profile.arrivalDate.toLocaleString()}
                                           onChange={event => handleChange(event)} />
                                </p>
                            </>
                        )
                    }
                    <p>
                        <button type="submit" className="button">Valider</button>
                    </p>
                </form>
            )
    );
}

export default UserForm;