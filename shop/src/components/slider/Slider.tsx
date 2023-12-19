import "./Slider.scss"

export const Slider = () => {
    return (
        <div className="slider-wrapper">
            <div className="slider-image-wrapper">
                <img src={`assets/images/sliderChair.png`} alt=""/>
            </div>

            <div className="about-slider-image-details">
                <p>HOT DEALS THIS WEEK</p>
                <h2>SALE 50% OFF
                    MODERN FURNITURE</h2>

                <button>VIEW NOW</button>
            </div>
        </div>
    );
};
