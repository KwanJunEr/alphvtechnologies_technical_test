import axios from "axios";

//create an axios instance with default configuration:

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    headers:{
        'Content-Type' : 'application/json'
    },
    withCredentials: true,
})