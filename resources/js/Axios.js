import React, { useState, useContext } from "react";
import axios from "axios";
import metaData from "./MetaData";
import { useStateContext } from "./ContextProvider";

const axiosClient = axios.create({
    baseURL: `${metaData.appUrl}api`,
});

let arr = document.cookie.split(";");
for (var i = 0; i < arr.length; i++) {
    let nS = arr[i].substring(0, "auth_token=".length).trim();
    if (nS.indexOf("auth_token") == 0 && nS == "auth_token") {
        let authToken = arr[i].trim().substring(nS.length + 1, arr[i].length);

        axiosClient.interceptors.request.use((config) => {
            console.log(authToken);
            if (authToken) {
                config.headers.Authorization = `Bearer ${authToken}`;
            }

            return config;
        });
    } else if (nS.indexOf("auth_token") == 0 && nS == "auth_token") {
        console.log(arr[i].substring(nS.length, arr[i].length));
    }
}

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
