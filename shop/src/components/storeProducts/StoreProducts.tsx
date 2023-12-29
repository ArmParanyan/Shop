import StoreNavigation from "./storeNavigation/StoreNavigation";
import {StoreByCategory} from "../../pages/store/storeByCategory/StoreByCategory";
import React from "react";

import "./StoreProducts.scss"
import Search from "../header/search/Search";
import PremiumProducts from "../premuimProducts/PremiumProducts";

const StoreProducts = () => {


    return (

        <>
            <Search/>
            <PremiumProducts/>
            <div className="store-products-wrapper">
                <StoreNavigation/>

                <StoreByCategory/>
            </div>

        </>
    );
}

export default StoreProducts;