import SocialIcons from "./socialIcons/SocialIcons";
import FooterContacts from "./footerContacts/FooterContacts";

import "./BrandName.scss"

const BrandName = () => {
    return (
        <div className="brand-name-wrapper">
            <div className="footer-title-wrapper">
                <h2 className="brand-name-text">BRAND NAME</h2>
            </div>

            <div className="text-wrapper">
                <p className="custom-text">
                    Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor.
                </p>
            </div>
            <div className="contacts-icons-wrapper">
                <FooterContacts/>
                <SocialIcons/>
            </div>
        </div>
    );
};

export default BrandName;