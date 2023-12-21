import Navigation from "../../components/header/navigation/Navigation";
import Search from "../../components/header/search/Search";
import React from "react";
import Supports from "../../components/supports/Supports";
import Slider from "../../components/slider/Slider";
import BedsheetSets from "../../components/bedsheetSets/BedsheetSets";
import Newsletter from "../../components/newsletter/Newsletter";
import InyVintageChair from "../../components/inyVintageChair/InyVintageChair";
import LargeTerracotaVase from "../../components/largeTerracotaVase/LargeTerracotaVase";

import "./Home.scss"
import {HomeCategories} from "../../components/homeCategories/HomeCategories";
export const Home = () => {
    return (
        <div>
            <Search/>
            <Supports/>

            <Slider/>
            <BedsheetSets/>

            <div className="chair-vase-wrapper">
                <InyVintageChair />
                <LargeTerracotaVase />
            </div>

            <HomeCategories />

            <Newsletter/>
        </div>
    );
};
