import React, { Fragment, useEffect, useState } from "react";
import { useAtom } from "jotai/index";
import {countAtom, totalPrice} from "../../atom/cartAtom";
import { IProductsById } from "../../interfaces/interfaces";
import {DeleteButton} from "../deleteButton/DeleteButton";
import {SelectComponent} from "../selectCompnenet/SelectComponent";
import {CheckOut} from "../checkOut/CheckOut";

export const SelectedOrders = ({ item, setTotalSum }: any) => {

    return (
        <>
            <div className="product-wrapper products-checkout-wrapper">
                <img
                    src={item.image}
                    alt=""
                    style={{
                        width: "130px",
                        height: "180px",
                    }}
                />

                <div className="products-name-price-wrapper">
                    <div className="products-name-price">
                        <p className="checkout-product-name">{item.name}</p>
                        <p className="checkout-product-price">{item.price}$</p>
                    </div>
                    <div className="select-wrapper">
                        <SelectComponent countInStock={item.countInStock} productId={item.id} price={item.price} setTotalSum={setTotalSum}/>
                    </div>
                </div>


            </div>
        </>
    );
};
