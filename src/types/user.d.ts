interface IUserProfile {
    [key: string]: any;
    id: string;
    firstName: string;
    lastName: string;
    job: string;
    arrivalDate: Date;
    picture: string;
}

interface IUser {
    profile: IUserProfile;
    material: string[];
}
