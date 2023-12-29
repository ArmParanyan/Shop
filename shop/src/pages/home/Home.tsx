import Search from "../../components/header/search/Search";
import React from "react";
import Supports from "../../components/supports/Supports";
import HomePageSlider from "../../components/HomePageSlider/HomePageSlider";
import BedsheetSets from "../../components/bedsheetSets/BedsheetSets";
import Newsletter from "../../components/newsletter/Newsletter";
import InyVintageChair from "../../components/inyVintageChair/InyVintageChair";
import LargeTerracotaVase from "../../components/largeTerracotaVase/LargeTerracotaVase";

import "./Home.scss"
import {HomeCategories} from "../../components/homeCategories/HomeCategories";
import HomePageProducts from "../../components/homepageProducts/HomePageProducts";

export const Home = () => {
    return (
        <div>
            <Search/>
            <Supports/>

            <HomePageSlider/>

            <div className="chair-vase-wrapper">
                <InyVintageChair/>
                <LargeTerracotaVase/>
            </div>

            <HomeCategories/>

            <BedsheetSets/>
            <HomePageProducts/>
            <Newsletter/>
        </div>
    );
};
