import {useGetProductByID} from "../../hooks/useGetProductByID";
import React, {Fragment, useEffect, useState} from "react";
import {CarouselSlider} from "../../components/carouselSlider/CarouselSlider";
import {useGetFeaturedData} from "../../hooks/useGetFeaturedData";
import {useAtom} from "jotai"
import {countAtom} from "../../atom/cartAtom";
import {idAtom} from "../../atom/cartAtom"
import {EmptyPage} from "../../components/emptyPage/EmptyPage";

import "./Cart.scss";
import {useQueryGetProducts} from "../../hooks/useGetProductsByIds";
import {useNavigate} from "react-router-dom";
import {SelectedOrders} from "../../components/ selectedOrders/SelectedOrders";
import {CheckOut} from "../../components/checkOut/CheckOut";
import {DeleteButton} from "../../components/deleteButton/DeleteButton";
import {usePostOrders} from "../../hooks/usePostOrders";


export const Cart = () => {

    const [selectedProducts, setSelectedProducts] = useState(JSON.parse(localStorage.getItem("selectedProduct") || "null"))

    const arrayOfSelectedIds: string[] = JSON.parse(localStorage.getItem("arrayOfSelectedProductIds") || "[]")

    const navigate = useNavigate();

    const selectedId = localStorage.getItem("selectedProductId");

    const [_, forceUpdate] = useState("")
    ;
    const updateParent = () => {
        forceUpdate("");
    }


    useEffect(() => {

        const storedSelectedProducts = JSON.parse(localStorage.getItem("selectedProduct") || "null");

        const filteredSelectedProducts = storedSelectedProducts.filter((product: any, index: number, self: any[]) =>
            index === self.findIndex((p: any) => p.id === product.id)
        );

        localStorage.setItem("selectedProduct", JSON.stringify(filteredSelectedProducts));


        const newIds = selectedProducts.map((item: any) => item.id);

        const uniqueNewIds = newIds.filter((newId: any) => !arrayOfSelectedIds.includes(newId));


        arrayOfSelectedIds.push(...uniqueNewIds);

        localStorage.setItem("arrayOfSelectedProductIds", JSON.stringify(arrayOfSelectedIds));


    }, [selectedProducts, arrayOfSelectedIds]);


    const {data: featuredData} = useGetFeaturedData(selectedId as string);
    const [totalSum, setTotalSum] = useState(0)


    const handleRemoveItem = (productId: string) => {

        const selectedProducts = JSON.parse(localStorage.getItem("selectedProduct") || "[]");
        const updatedSelectedProducts = selectedProducts.filter((product: any) => product.id !== productId);
        localStorage.setItem("selectedProduct", JSON.stringify(updatedSelectedProducts))
        localStorage.removeItem(`productData_${productId}`)
        setSelectedProducts(updatedSelectedProducts);

    };




    return (
        <>
            <p className="shopping-cart-title">Shopping CART</p>

            <div className="products-checkout-wrapper">
                <div className="product-count-wrapper">
                    {selectedProducts && selectedProducts.map((item: any) => (
                        <Fragment key={item.id}>
                            <SelectedOrders  item={item} updateParent={updateParent} price={item.price} setTotalSum={setTotalSum}/>
                            <DeleteButton id={item.id} handleRemoveItem={handleRemoveItem}/>

                        </Fragment>
                    ))}
                </div>

                <CheckOut totalSumValue={totalSum} />

            </div>


            {featuredData && <CarouselSlider data={featuredData} type={"IFeatured"}/>}

        </>
    );
};
