import React, { createContext, useState, useContext, useEffect } from "react";
import axiosClient from "./Axios";
import metaData from "./MetaData";

const StateContext = createContext({
    manageLogin: {},
    setManageLogin: () => {},
    isLogined: {},
    setIsLogined: () => {},
    setAuthToken: () => {},
    loginNow: {},
    loginData: {},
    cart: {},
    setCart: () => {},
    addCart: () => {},
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
            image: "",
            updated_at: "",
        },
        addressForm: false,
    });
    const [isLogined, setIsLogined] = useState({ login: false });
    let [cart, setCart] = useState(null);
    useEffect(() => {
        if (manageLogin.loginNow == true && manageLogin.authToken) {
            let url = `${metaData.appUrl}api/user/is-login`;
            axios
                .post(
                    url,
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
                    setManageLogin({
                        ...manageLogin,
                        loginData: response.data,
                        united: false,
                    });
                })
                .catch((error) => {
                    console.error("Error:", error.response.data);
                });
        }
    }, [manageLogin.loginNow]);
    let addCart = (item) => {
        console.log(item);
        let exist = JSON.parse(localStorage.getItem("cart"));
        let arr = [];
        if (exist) {
            for (let i = 0; i < exist.length; i++) {
                arr.push(exist[i].sku);
            }
        }
        if (arr.length > 0 && arr.includes(item)) {
            return;
        } else if (!arr.includes(item) && exist) {
            localStorage.setItem(
                "cart",
                JSON.stringify([...exist, { sku: item }])
            );
        } else if (!arr.includes(item) && !exist) {
            localStorage.setItem("cart", JSON.stringify([{ sku: item }]));
        }

        setCart(JSON.parse(localStorage.getItem("cart")));
    };
    //  console.log(manageLogin);
    let setAuthToken = (register, login, united) => {
        let arr = document.cookie.split(";");
        for (var i = 0; i < arr.length; i++) {
            let nS = arr[i].trim().substring(0, "auth_token".length);
            if (nS.indexOf("auth_token") == 0 && nS == "auth_token") {
                let authToken = arr[i]
                    .trim()
                    .substring(nS.length + 1, arr[i].length);
                let url = `${metaData.appUrl}api/user/is-login`;

                axios
                    .post(
                        url,
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
            value={{
                manageLogin,
                setManageLogin,
                loginState,
                setAuthToken,
                cart,
                setCart,
                addCart,
            }}
        >
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
