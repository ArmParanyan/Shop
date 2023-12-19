import "./Menu.scss"

const Menu = () => {
    return (
        <div className="header-menu-wrapper">
            <img src={`/assets/images/user.png`} alt="user"/>
            <img src={`/assets/images/shopingCart.png`} alt="shopping cart"/>
            <img src={`/assets/images/burger.png`} alt="burger"/>
        </div>
    );
};

export default Menu;