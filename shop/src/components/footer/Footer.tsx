import BrandName from "./brandName/BrandName";
import Shopping from "./shopping/Shopping";
import MoreLinks from "./moreLinks/MoreLinks";
import PromoUpdate from "./promoUpdate/PromoUpdate";
import Author from "./author/Author";

import "./Footer.scss"

export const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-components-wrapper">
                <div className="brand-name-shopping-wrapper">
                    <BrandName/>
                    <Shopping/>
                </div>
                <div className="links-promo-wrapper">
                    <MoreLinks/>
                    <PromoUpdate/>
                </div>
            </div>
            <Author/>
        </div>
    );
};
