import React from 'react';
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../../contexts/userContext';

const MaterialList: React.FC = () => {
    const [materialList, setMaterialList] = React.useState<IEquipment[]>([
        {
            id: '1',
            name: 'Mousquetons',
            quantity: 0,
        },
        {
            id: '2',
            name: 'Gants d\'intervention',
            quantity: 10,
        },
        {
            id: '3',
            name: 'Ceintures de sécurité tactique',
            quantity: 20,
        },
        {
            id: '4',
            name: 'Détecteurs de métaux',
            quantity: 0,
        },
        {
            id: '5',
            name: 'Brassards de sécurité',
            quantity: 30,
        },
        {
            id: '6',
            name: 'Lampes torches',
            quantity: 0,
        },
        {
            id: '7',
            name: 'Bandeaux « Agents cynophiles »',
            quantity: 5,
        },
        {
            id: '8',
            name: 'Gilets pare-balles',
            quantity: 12,
        },
        {
            id: '9',
            name: 'Chemises manches courtes',
            quantity: 30,
        },
        {
            id: '10',
            name: 'Blousons',
            quantity: 0,
        },
        {
            id: '11',
            name: 'Coupe-vent',
            quantity: 30,
        },
        {
            id: '12',
            name: 'Talkies walkies',
            quantity: 20,
        },
        {
            id: '13',
            name: 'Kits oreillettes',
            quantity: 10,
        },
        {
            id: '14',
            name: 'Tasers',
            quantity: 1,
        },
    ]); // TODO: get material from API
    const {user, setUser} = React.useContext(UserContext);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setUser({...user, material: [...user.material, event.target.id]})
            setMaterialList(materialList.map((item) => {
                if (item.id === event.target.id && item.quantity > 0) {
                    item.quantity--;
                }
                return item;
            }));
        } else {
            setUser({...user, material : user.material.filter((item) => item !== event.target.id)})
            setMaterialList(materialList.map((item) => {
                if (item.id === event.target.id) {
                    item.quantity++;
                }
                return item;
            }));
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: send user material to API
        navigate('/');
    }

    return (
        <div>
            <p>Liste du matériel :</p>
            <form onSubmit={handleSubmit}>
                {
                    materialList.map((item) => {
                        return <div key={item.id}>
                            <input type="checkbox"
                                   id={item.id} name={item.name}
                                   checked={user.material.includes(item.id)}
                                   onChange={handleChange}
                                   disabled={!user.material.includes(item.id) && item.quantity === 0} />
                            <label htmlFor={item.id}>{item.name}</label>
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