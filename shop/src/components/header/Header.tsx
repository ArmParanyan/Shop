import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import Supports from "../supports/Supports";

import "./Header.scss"

export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header-logo-menu-wrapper">
                <Logo/>
                <Menu/>
            </div>




        </div>
    );
};
