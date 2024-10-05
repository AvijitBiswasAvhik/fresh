import React, { useEffect, useState } from "react";
import { Link,redirect } from "react-router-dom";
import "../../css/component/cart-page.css";
import { useStateContext } from "../ContextProvider";
import axiosClient from "../Axios";


const CartPage = () => {
    // Sample state for cart items
    let {cartItems,setCartItems} = useStateContext();
    // let [cartItems, setCartItems] = useState({
        
    // });
    useEffect(() => {
        axiosClient
            .get("cart-items")
            .then((response) => {
                console.log(response.data);
                setCartItems(response.data);
            })
            .catch((error) => {
                // console.log(error.message);
            });
    }, []);
    // Handle quantity change
    const addQuantity = (productId, cartId) => {
        // setCartItems(cartItems.map(item =>
        //   item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        // ));
        console.log(cartId);
        axiosClient
            .post("/cart/increse-qty", { id: cartId })
            .then((response) => {
                console.log(response.data);
                setCartItems(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    const deleteQuantity = (productId, cartId) => {
        // setCartItems(cartItems.map(item =>
        //   item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        // ));
        console.log(cartId);
        axiosClient
            .post("/cart/decrese-qty", { id: cartId })
            .then((response) => {
                console.log(response.data);
                setCartItems(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    const destroy = (productId, cartId) => {
        // setCartItems(cartItems.map(item =>
        //   item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        // ));
        console.log(cartId);
        axiosClient
            .post("/cart/destroy", { id: cartId })
            .then((response) => {
                console.log(response.data);
                setCartItems(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    // Handle item deletion
    const handleDelete = (id) => {};

    // Calculate subtotal
    const subtotal = 22; //cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = 102.0; // Static value for now  paypal/create-payment
    const total = subtotal + tax;

    let checkOut = () => {
        axiosClient.post('paypal/create-payment',{id: cartItems.extraData.user_id})
        .then((response) => {
            console.log(response.data);
            window.location.href = response.data;
            
        })
        .catch((error) =>{
            console.log(error.message);
        });
    };
    return (
        <div className="cart-container">
            <h2>Your Cart ({cartItems.cartData.length} items)</h2>

            {cartItems.cartData.map((item) => (
                <div className="cart-item" key={item.id}>
                    <img
                        src={item.product_image}
                        alt={item.name}
                        className="product-image"
                    />
                    <div className="item-details">
                        <h4>
                            <Link
                                className="text-decoration-none "
                                to={`/product-view?sku=${item.sku}`}
                            >
                                {item.product_title}
                            </Link>
                        </h4>
                        {item.product_items && (
                            <p className="shipping-date">{}</p>
                        )}
                    </div>
                    <div className="price-quantity">
                        <p className="price">${item.price}</p>
                        <div className="quantity-control">
                            <button
                                className="quantity-btn"
                                onClick={() =>
                                    deleteQuantity(item.product_id, item.id)
                                }
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={item.qty}
                                className="quantity-input"
                                readOnly
                            />
                            <button
                                className="quantity-btn"
                                onClick={() =>
                                    addQuantity(item.product_id, item.id)
                                }
                            >
                                +
                            </button>
                        </div>
                        <p className="total">${item.total_price.toFixed(2)}</p>
                    </div>
                    <button
                        className="delete-btn"
                        onClick={() => destroy(item.product_id, item.id)}
                    >
                        X
                    </button>
                </div>
            ))}

            {/* Subtotal and Checkout Section */}
            <div className="summary-section">
                <p>Subtotal: ${cartItems.extraData.subTotal}</p>
                <p>Sales Tax: ${tax.toFixed(2)}</p>
                <p>
                    Coupon Code: <a href="#">Add Coupon</a>
                </p>
                <h3>Grand Total: ${cartItems.extraData.subTotal}</h3>
                <p className="free-shipping">
                    Congrats, you're eligible for Free Shipping
                </p>
                <button className="checkout-btn" onClick={()=>{checkOut()}}>Check out</button>
            </div>
        </div>
    );
};

export default CartPage;
