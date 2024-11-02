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
    cartData: {},
    setCartData: () => {},
    cartItems: {
        cartData: [],
        extraData: { subtotal: 0 },
    },
    setCartItems: () => {},
    hideCart: () => {},
    order: {},
    setOrder: () => {},
    setOr: () => {},
    filter: {},
    saveFilter: () => {},
    setFilter: () => {},
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
    let [cartItems, setCartItems] = useState({
        cartData: [],
        extraData: { subtotal: 0 },
    });
    let [cartData, setCartData] = useState([]);
    let [newCart, setNewcart] = useState(1);
    let [order, setOrder] = useState(false);
    let [filter, setFilter] = useState({
        category: [],
        price_min: 0,
        price_max: 10000,
        discount: "",
        brand: "",
        offset: 0,
    });
    let saveFilter = (val)=>{
        setFilter((pre)=>{
            return {
                ...pre,
                category: [...pre.category, val],
            }
        })
    }
    useEffect(() => {
        axiosClient
            .get("order?offset=0")
            .then((response) => {
                setOrder((pre) => {
                    return response.data;
                });
            })
            .catch((response) => {
                console.log(response);
            });
    }, [manageLogin.loginNow]);
    let setOr = (offset) => {};

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
    let hideCart = () => {
        //e.stopPropagation();

        let reactApp = document.getElementById("react-app");
        reactApp.addEventListener("click", (e) => {
            e.stopPropagation();
            // let showCart = (e) => {
            //     e.preventDefault();
            //     console.log("gg")
            //     let popCart = document.getElementById("pop-up-cart-content");
            //     popCart.classList.add("expand");
            // };

            let popCart = document.getElementById("pop-up-cart-content");

            console.log(popCart.classList.contains("expand"));
            if (popCart.classList.contains("expand") && e.target != popCart) {
                popCart.classList.remove("expand");
            }
        });
    };
    //hideCart();
    useEffect(() => {
        axiosClient
            .get("cart-data")
            .then((response) => {
                setCartData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [newCart, manageLogin]);
    useEffect(() => {
        axiosClient
            .get("cart-items")
            .then((response) => {
                setCartItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [newCart, manageLogin]);
    function addCart(productId) {
        if (manageLogin.loginData.id != 0) {
            ~axiosClient
                .post("add-to-cart", { product_id: productId })
                .then((response) => {
                    setNewcart((old) => {
                        return old + 1;
                    });
                    console.log(newCart); // Logs the response data
                })
                .catch((error) => {
                    console.error(
                        error.response ? error.response.data : error.message
                    ); // Handles and logs the error
                });
        }
    }
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
                cartItems,
                setCartItems,
                cartData,
                setCartData,
                addCart,
                hideCart,
                order,
                setOrder,
                setOr,
                filter,
                saveFilter,
                setFilter,
                
            }}
        >
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
