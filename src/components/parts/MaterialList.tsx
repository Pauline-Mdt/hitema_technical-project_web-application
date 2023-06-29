import React from 'react';
import {useNavigate} from 'react-router-dom';
import {UserContext, userProfileInitialState, userReservationInitialState} from '../../contexts/userContext';
import {getMaterials, getReservation, updateEquipment, updateReservation} from '../../services/api';

const MaterialList: React.FC = () => {
    const [materialList, setMaterialList] = React.useState<IEquipment[]>([]);
    const {userProfile, setUserProfile, userReservation, setUserReservation} = React.useContext(UserContext);
    const navigate = useNavigate();

    React.useEffect(() => {
        getMaterials().then((result) => {
            setMaterialList(result.materials);
        });
        getReservation(userProfile.userId).then((result) => {
            setUserReservation(result);
        });
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setUserReservation({...userReservation, materiels: [...userReservation.materiels, event.target.id]})
            setMaterialList(materialList.map((item) => {
                if (item.materialId === event.target.id && item.quantityA > 0) {
                    item.quantityA--;
                }
                return item;
            }));
        } else {
            setUserReservation({...userReservation, materiels : userReservation.materiels.filter((item) => item !== event.target.id)})
            setMaterialList(materialList.map((item) => {
                if (item.materialId === event.target.id) {
                    item.quantityA++;
                }
                return item;
            }));
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        materialList.map((item) => {
            updateEquipment(item);
        });

        updateReservation(userReservation).then((result) => {
            setUserProfile(userProfileInitialState);
            setUserReservation(userReservationInitialState);
            navigate('/');
        });
    }

    return (
        <div>
            <p>Liste du matériel :</p>
            <form onSubmit={handleSubmit}>
                {
                    materialList.map((item) => {
                        return <div key={item.materialId}>
                            <input type="checkbox"
                                   id={item.materialId} name={item.name}
                                   checked={userReservation.materiels.includes(item.materialId)}
                                   onChange={handleChange}
                                   disabled={!userReservation.materiels.includes(item.materialId) && item.quantityA === 0} />
                            <label htmlFor={item.materialId}>{item.name}</label>
                        </div>
                    })
                }
                <p>
                    <button type="submit" className="button">Valider</button>
                </p>
            </form>
        </div>
    );
}

export default MaterialList;