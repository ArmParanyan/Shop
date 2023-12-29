import Search from "../../components/header/search/Search";
import PremiumProducts from "../../components/premuimProducts/PremiumProducts";
import {Outlet} from "react-router-dom";
import React from "react";
import StoreNavigation from "../../components/storeProducts/storeNavigation/StoreNavigation";

export const Store = () => {
    return (
        <>
            <Search />
            <PremiumProducts />
            <div style={{
                display: "flex",
                gap: "150px",
                alignItems: "center"
            }}>
            <StoreNavigation />
            <p style={{
                fontSize: "35px"
            }}>
                Aystex karox e linel dzer govazdy</p>
            </div>
            <Outlet />
        </>
    );
};
