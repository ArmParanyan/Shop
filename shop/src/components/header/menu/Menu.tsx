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
            <Link to={"/shopping_cart"}>

            <img src={`/assets/images/shopingCart.png`} alt="shopping cart"/>
            </Link>
            <img src={`/assets/images/burger.png`} alt="burger"/>
        </div>
    );
};

export default Menu;