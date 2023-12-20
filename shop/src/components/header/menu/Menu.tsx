import "./Menu.scss"
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className="header-menu-wrapper">
            <Link to={"/register"}>
            <img
                src={`/assets/images/user.png`}
                alt="user"
            />
            </Link>
            <img src={`/assets/images/shopingCart.png`} alt="shopping cart"/>
            <img src={`/assets/images/burger.png`} alt="burger"/>
        </div>
    );
};

export default Menu;