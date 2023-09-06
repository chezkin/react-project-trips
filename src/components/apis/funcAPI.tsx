import { useState } from 'react'

let tokenSTR: string | null = null;

export type Trip = {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    image: string;
}

export interface NewTripData {
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string[];
    id?: string;
}

export const getTripsAPI = () => {
    const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch("https://servertoreact.onrender.com/api/trips", requestOptions)
        .then(response => response.json())
        .then(result => { console.log(result); return result })
        .catch(error => console.log('error', error));

}

export const getTripAPIbyId = async (id: string) => {
    const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch(`https://servertoreact.onrender.com/api/trips/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => { console.log(result); return result })
        .catch(error => console.log('error', error));
}


export const postNewTripsAPI = async (newTrip: NewTripData,) => {
    var myHeaders = new Headers();
    const storedToken = localStorage.getItem('myTokenTrip');
    myHeaders.append("Authorization", storedToken!);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(
        newTrip
    );

    var requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://servertoreact.onrender.com/api/trips", requestOptions)
        .then(response => response.json())
        .then(result => { console.log(result); return result })
        .catch(error => console.log('error', error));
}


export const putTripsAPI = async (newTrip: NewTripData,) => {
    var myHeaders = new Headers();
    const storedToken: string | null = localStorage.getItem('myTokenTrip')
    myHeaders.append("Authorization", storedToken!);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(newTrip);

    var requestOptions: RequestInit = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(`https://servertoreact.onrender.com/api/trips/${newTrip.id}`, requestOptions)
    .then(response => {
        if(response.status === 200){
       console.log(response);
        return response} throw new Error(response.toString());})
    .then(response => response.json())
    .catch(error => { console.log('error', error); return error });
}


export const deleteTripAPIbyId = async (id: string) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "test-token");

    var requestOptions: RequestInit = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`https://servertoreact.onrender.com/api/trips/${id}`, requestOptions)
        .then(response => {
            if(response.status === 200){
            return response} throw new Error(response.toString());})
        .then(response => response.json())
        .catch(error => { console.log('error', error); return error });
}




export type UserRegistration = {
    email: string,
    password: string
}
export const postRegistrationAPI = async (user: UserRegistration, token = "test-token") => {
    var myHeaders = new Headers();
    myHeaders.append("authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(user);

    var requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://servertoreact.onrender.com/api/auth/register", requestOptions)
        .then(response => response.text())
        .then(result => { console.log(result); return result })
        .catch(error => { throw new Error(error) });
}

export interface LoginResponse {
    message: string;
    responseObj: {
        user: {
            id: string;
            email: string;
            password: string;
        };
        token: string;
    };
}

export interface Loginfaild {
    error: string;
}

export const postLoginAPI = async (user: UserRegistration, token = "test-token") => {
    var myHeaders = new Headers();
    myHeaders.append("authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(user);

    var requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://servertoreact.onrender.com/api/auth/login", requestOptions)
        .then(response => response.json())
        .then((result: LoginResponse) => {
            console.log(result);
            if (result.message) {
                localStorage.setItem('myTokenTrip', result.responseObj.token);
                console.log(result.responseObj.token);

            }
            return result
        })
        .catch(error => { throw new Error(error) });
}