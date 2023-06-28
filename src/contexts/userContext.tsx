import React, {createContext} from 'react';

interface UserContextType {
    user: IUser,
    setUser: React.Dispatch<React.SetStateAction<IUser>>
}

export const UserContext: React.Context<UserContextType> = createContext({} as UserContextType);

export const userItitialState: IUser = {
    profile: {
        id: '',
        lastName: '',
        firstName: '',
        job: '',
        arrivalDate: new Date(),
        picture: '',
    },
    material: [],
}
export const UserProvider = (props: any) => {
    const [user, setUser] = React.useState<IUser>(userItitialState);

    return <UserContext.Provider value={{
        user,
        setUser
    }}>
        {props.children}
    </UserContext.Provider>
}