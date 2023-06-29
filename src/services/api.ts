import axios, {AxiosInstance} from 'axios';
import {API_URL, API_AXIOS_ERROR_TITLE, API_AXIOS_RESPONSE_TITLE, API_UNEXPECTED_ERROR_TITLE} from '../utils/constants';

/*
Axios instance base for API call
 */
const HTTP: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, XMLHttpRequest',
    },
});

/*
Functions for USER routes
 */
export async function createUser(user: IUserProfile) {
    try {
        const response = await HTTP.post('/users/create', user);
        // console.log(API_AXIOS_RESPONSE_TITLE, response.data);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function getUser(id: string) {
    try {
        const response = await HTTP.get(`/users/get?userId=${id}`);
        // console.log(API_AXIOS_RESPONSE_TITLE, response.data);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateUser(user: IUserProfile) {
    try {
        const response = await HTTP.post('/users/update', user);
        // console.log(API_AXIOS_RESPONSE_TITLE, response.data);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function deleteUser(id: string) {
    try {
        const response = await HTTP.delete(`/users/delete?userId=${id}`);
        // console.log(API_AXIOS_RESPONSE_TITLE, response.data);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

/*
Functions for EQUIPMENT routes
 */
export async function getMaterials() {
    try {
        const response = await HTTP.get('/materials/getAll');
        // console.log(API_AXIOS_RESPONSE_TITLE, response.data);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function getEquipment(id: string) {
    try {
        const response = await HTTP.get(`/materials/get?materialId=${id}`);
        // console.log(API_AXIOS_RESPONSE_TITLE, response.data);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateEquipment(equipment: IEquipment) {
    try {
        const response = await HTTP.post('/materials/update', equipment);
        // console.log(API_AXIOS_RESPONSE_TITLE, response.data);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

/*
Functions for RESERVATION routes
 */
export async function createReservation(reservation: any) {
    try {
        const response = await HTTP.post('/reservations/create', reservation);
        // console.log(API_AXIOS_RESPONSE_TITLE, response.data);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function getReservation(userId: string) {
    try {
        const response = await HTTP.get(`/reservations/get?userId=${userId}`);
        // console.log(API_AXIOS_RESPONSE_TITLE, response.data);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateReservation(reservation: IReservation) {
    try {
        const response = await HTTP.post('/reservations/update', reservation);
        // console.log(API_AXIOS_RESPONSE_TITLE, response.data);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

/*
Functions for FACE RECOGNITION routes
 */
export async function postFaceRecognition(picture: string) {
    try {
        const response = await HTTP.post('/face-recognition', {
            picture: picture,
        });
        // console.log(API_AXIOS_RESPONSE_TITLE, response.data);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

/*
Handle error from API call
 */
const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
        console.error(API_AXIOS_ERROR_TITLE, error);
        return error.response;
    } else {
        console.error(API_UNEXPECTED_ERROR_TITLE, error);
        return 'An unexpected error occurred';
    }
}