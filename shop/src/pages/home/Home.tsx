import Navigation from "../../components/header/navigation/Navigation";
import Search from "../../components/header/search/Search";
import React from "react";
import Supports from "../../components/supports/Supports";
import Slider from "../../components/slider/Slider";
import BedsheetSets from "../../components/bedsheetSets/BedsheetSets";
import Newsletter from "../../components/newsletter/Newsletter";

export const Home = () => {
    return (
        <div>
            <Search/>
            <Supports/>

            <Slider/>
            <BedsheetSets/>
            <Newsletter/>
        </div>
    );
};
