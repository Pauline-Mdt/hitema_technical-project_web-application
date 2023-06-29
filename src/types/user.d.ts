interface IUserProfile {
    [key: string]: any;
    userId: string;
    picture: string;
    firstname: string;
    lastname: string;
    role: string;
    dateinscription?: Date;
    reservationId: string;
}