import axios from "axios";
import { SERVER_URL } from "../data";

const API = axios.create({baseURL:SERVER_URL})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('token')){
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req
})

export default API;