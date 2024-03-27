import React, { useState, useContext } from "react";
import axios from "axios";
import metaData from "./MetaData";
import { useStateContext } from "./ContextProvider";

const axiosClient = axios.create({
    baseURL: `${metaData.appUrl}api`,
});

axiosClient.interceptors.request.use((config) => {
    let arr = document.cookie.split(";");
    for (var i = 0; i < arr.length; i++) {
        let nS = arr[i].trim().substring(0, "auth_token".length);
        if (nS.indexOf("auth_token") == 0 && nS == "auth_token") {
            let authToken = arr[i]
                .trim()
                .substring(nS.length + 1, arr[i].length);
            if (authToken) {
                config.headers.Authorization = `Bearer ${authToken}`;
            }
        } else if (nS.indexOf("auth_token") == 0 && nS == "auth_token") {
            console.log(arr[i].substring(nS.length, arr[i].length));
        }
    }

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.staus === 401) {
            return error;
        }
        throw error;
    }
);
export default axiosClient;
