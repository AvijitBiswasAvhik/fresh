import React from "react";
import axios from "axios";
import metaData from "./MetaData";

const axiosClient = axios.create({
   
    baseURL: `${metaData.appUrl}api`,
});


axiosClient.interceptors.request.use((config) =>{
    if(localStorage.getItem('TOKEN')){
        config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`;
    }
    
    return config;
});

axiosClient.interceptors.response.use(
    (response) =>{
        return response;
    },
    (error) =>{
        if(error.response && error.response.staus === 401){
            return error;
        }
        throw error;
    }
    
);
export default axiosClient;