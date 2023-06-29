import React from 'react';
import {UserContext} from '../../contexts/userContext';
import {useLocation, useNavigate} from 'react-router-dom';
import Loader from './Loader';
import {createUser, postFaceRecognition} from '../../services/api';
import {TEXT_UNEXPECTED_ERROR} from '../../utils/constants';

const UserForm: React.FC = () => {
    const jobsList = ['Agent de sécurité', 'Agent de surveillance', 'Agent de gardiennage', 'Agent de protection'];
    const {userProfile, setUserProfile} = React.useContext(UserContext);
    const path: string|undefined = useLocation().pathname.split('/').pop();
    const isNew = path === 'registration';
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        event.preventDefault();
        setUserProfile({...userProfile,  [event.target.name]: event.target.value});
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!userProfile.picture) {
            alert('Veuillez prendre une photo s\'il vous plait');
            return;
        }

        if (isNew) {
            for (const property in userProfile ) {
                if (!userProfile[property] && property !== 'userId' && property !== 'dateinscription' && property !== 'reservationId') {
                    return alert('Veuillez remplir tous les champs s\'il vous plait');
                }
            }

            setIsLoading(true);

            createUser(userProfile).then((result) => {
                setIsLoading(false)

                if (!result) {
                    return alert(TEXT_UNEXPECTED_ERROR);
                }

                const userId = result.id;
                if (userId) {
                    navigate('/')
                } else {
                    return alert('Erreur lors de l\'enregistrement de l\'utilisateur');
                }
            });
        } else {
            setIsLoading(true);

            postFaceRecognition(userProfile.picture).then((result) => {
                setIsLoading(false);

                if (!result) {
                    return alert(TEXT_UNEXPECTED_ERROR);
                }

                const isUserRecognized = result.similar;
                if (isUserRecognized) {
                    setUserProfile({...userProfile, userId: result.userId});
                    navigate('/material-reservation')
                } else {
                    return alert('Utilisateur non reconnu');
                }
            });
        }
    }

    return (
        isLoading ?
            <Loader />
            : (
                <form className="form" onSubmit={handleSubmit}>
                    <img
                        className="profile_image"
                        src={userProfile.picture}
                    />
                    {
                        isNew && (
                            <>
                                <p className="form_row">
                                    <label htmlFor="lastname">Nom</label>
                                    <input type="text" id="lastname" name="lastname" required
                                           value={userProfile.lastname}
                                           onChange={event => handleChange(event)} />
                                </p>
                                <p className="form_row">
                                    <label htmlFor="firstname">Prénom</label>
                                    <input type="text" id="firstname" name="firstname" required
                                           value={userProfile.firstname}
                                           onChange={event => handleChange(event)} />
                                </p>
                                <p className="form_row">
                                    <label htmlFor="role">Poste</label>
                                    <select id="role" name="role" required
                                            value={userProfile.role}
                                            onChange={event => handleChange(event)}>
                                        <option disabled value="">Choisir un poste</option>
                                        {
                                            jobsList.map((job, index) => {
                                                return <option key={index} value={job}>{job}</option>
                                            })
                                        }
                                    </select>
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