import React, {createContext} from 'react';

interface UserContextType {
    userProfile: IUserProfile,
    setUserProfile: React.Dispatch<React.SetStateAction<IUserProfile>>,
    userReservation: IReservation,
    setUserReservation: React.Dispatch<React.SetStateAction<IReservation>>,
}

export const UserContext: React.Context<UserContextType> = createContext({} as UserContextType);

export const userProfileInitialState: IUserProfile = {
    userId: '',
    picture: '',
    lastname: '',
    firstname: '',
    role: '',
    dateinscription: new Date(),
    reservationId: '',
}

export const userReservationInitialState: IReservation = {
    reservationId: '',
    userId: '',
    materiels: [],
}

export const UserProvider = (props: any) => {
    const [userProfile, setUserProfile] = React.useState<IUserProfile>(userProfileInitialState);
    const [userReservation, setUserReservation] = React.useState<IReservation>(userReservationInitialState);

    return <UserContext.Provider value={{
        userProfile,
        setUserProfile,
        userReservation,
        setUserReservation,
    }}>
        {props.children}
    </UserContext.Provider>
}