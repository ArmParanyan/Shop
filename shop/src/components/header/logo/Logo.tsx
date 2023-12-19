import "./Logo.scss"

const Logo = () => {
    return (
        <div className="header-logo-wrapper">
            <img src={`/assets/images/logo.png`} alt="logo"/>
            <h1>BRAND NAME</h1>
        </div>
    );
};


export default Logo;