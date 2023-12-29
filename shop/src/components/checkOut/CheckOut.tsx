import React, {FC, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAtom} from "jotai/index";
import {totalPrice} from "../../atom/cartAtom";
import {useGetProductByID} from "../../hooks/useGetProductByID";
import {type} from "node:os";
import {usePostOrders} from "../../hooks/usePostOrders";

interface ICheckOutProps {
    totalSumValue: number
}


export const CheckOut: FC<ICheckOutProps> = ({totalSumValue}) => {

    const navigate = useNavigate();

    const {mutate} = usePostOrders();

    const onCheckout = () => {

        const token = JSON.parse(localStorage.getItem("token") || "");
        const data = JSON.parse(localStorage.getItem("selectedProduct") || "null");

        const orderItemsArr = data.map((item: any) => {
            return {
                quantity: item.quantity, product: item.id
            }
        }, [])
        const currentOrder: any = {
            orderItems: orderItemsArr,
            shippingAddress1: "No 45,Park Street",
            shippingAddress2: "No 46,Main Street",
            city: "Colombo",
            zip: "10600t",
            country: "Sri Lanka",
            phone: "+94717185748",
            user: token.userID,
        }
        if (token !== "") {
            localStorage.setItem("selectedProduct", JSON.stringify([]));
            mutate(currentOrder);
        }
    }


    const handleCheckOutClick = () => {
        const token = localStorage.getItem("token");



        if (token !== null)
        {
            onCheckout();
            navigate('/orders')

        }
    else
        {
            navigate("/register");
        }

    }


    return (
        <>
            <div className="orders-price-wrapper">
                <div>
                    <div className="orders-pricing">
                        <p>Order value: </p>
                        <p>{totalSumValue}$</p>
                    </div>


                    <div className="orders-pricing">
                        <p>Shipping:</p>
                        <p>0.0$</p>
                    </div>
                </div>


                <div className="orders-pricing">
                    <p>Total</p>
                    <p>{totalSumValue} $</p>
                </div>
                <div className="continue-checkout-button-wrapper">
                    <button onClick={() => handleCheckOutClick()} className="continue-checkout-button">Continue to
                        checkout
                    </button>
                </div>
            </div>
        </>
    );
};
