import {NavLink, Outlet} from "react-router-dom";

import "./Navigation.scss"
import {About} from "../../../pages/about/About";

const Navigation = () => {
    return (
        <>
            <div className="header-navigation-wrapper">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/store">STORE</NavLink>
                <NavLink to="/categories">CATEGORIES</NavLink>
                <NavLink to="/brand">BRAND</NavLink>
                <NavLink to="/pages">PAGES</NavLink>
                <NavLink to="/about">ABOUT US</NavLink>
                <NavLink to="/news">NEWS</NavLink>
                <NavLink to="/contact">CONTACT US </NavLink>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;