import "./PremiumProducts.scss"

const PremiumProducts = () => {
    return (
        <div className="premium-products-wrapper">
            <div className="premium-products-text">
                <div className="premium-products-text-wrapper">
                    <p className="premium-member">Premium MEMBER EXCLUSIVE</p>
                    <p className="premium-discount">15% OFF EVERYTHING + EXTRA gift card & coupon Offers </p>
                </div>
                <p className="not-member">NOT A MEMBER? JOIN NOW TO SHOP.</p>
            </div>
        </div>
    );
};

export default PremiumProducts