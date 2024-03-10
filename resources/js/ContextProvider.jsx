import React, { createContext, useState, useContext, useEffect } from "react";
import axiosClient from "./Axios";

const StateContext = createContext({
    manageLogin: {},
    setManageLogin: () => {},
    isLogined: {},
    setIsLogined: () => {},
    setAuthToken: () => {},
    loginNow: {},
    loginData: {},
});

export function ContextProvider({ children }) {
    const [manageLogin, setManageLogin] = useState({
        united: false,
        login: true,
        register: false,
        authToken: "",
        loginNow: false,
        loginData: {
            created_at: "",
            email: "",
            email_verified_at: null,
            id: 0,
            name: "",
            updated_at: "",
        },
    });
    const [isLogined, setIsLogined] = useState({ login: false });
    useEffect(() => {
        if (manageLogin.loginNow == true && manageLogin.authToken) {
            console.log("login now");
            axios
                .post(
                    "api/user/is-login",
                    { hello: true },
                    {
                        headers: {
                            Authorization: `Bearer ${manageLogin.authToken}`,
                            "Content-Type": "application/json",
                        },
                    } // URL of the endpoint
                    // Payload data as an object
                )
                .then((response) => {
                    console.log(response);
                    setManageLogin({
                        ...manageLogin,
                        loginData: response.data,
                    });
                })
                .catch((error) => {
                    console.error("Error:", error.response.data);
                });
        }
    }, []);

    console.log(manageLogin);
    let setAuthToken = (register, login, united) => {
        let arr = document.cookie.split(";");
        for (var i = 0; i < arr.length; i++) {
            let nS = arr[i].substring(0, "auth_token=".length).trim();
            //console.log(nS);
            if (nS.indexOf("auth_token") == 0 && nS == "auth_token") {
                let authToken = arr[i]
                    .trim()
                    .substring(nS.length + 1, arr[i].length);
                // if(authToken )
                console.log(authToken);

                axios
                    .post(
                        "api/user/is-login",
                        { hello: true },
                        {
                            headers: {
                                Authorization: `Bearer ${authToken}`,
                                "Content-Type": "application/json",
                            },
                        }
                    )
                    .then((response) => {
                        setManageLogin({
                            ...manageLogin,
                            authToken: authToken,
                            loginNow: true,
                            united: united,
                            register: register,
                            login: login ? login : true,
                        });
                    })
                    .catch((error) => {
                        console.error("Error:", error.response.data);
                    });
            } else if (nS.indexOf("auth_token") == 0 && nS == "auth_token") {
                console.log(arr[i].substring(nS.length, arr[i].length));
            }
        }
    };
    useEffect(() => {
        setAuthToken();
    }, []);
    //axiosClient.
    const loginState = () => {
        console.log("hello");
    };

    return (
        <StateContext.Provider
            value={{ manageLogin, setManageLogin, loginState, setAuthToken }}
        >
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
