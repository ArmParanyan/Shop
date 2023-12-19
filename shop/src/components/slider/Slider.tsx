import "./Slider.scss"

export const Slider = () => {
    return (
        <div className="slider-wrapper">
            <div className="slider-image-wrapper">
                <img src={`assets/images/sliderChair.png`} alt=""/>
            </div>

            <div className="about-slider-image-details">
                <p>HOT DEALS THIS WEEK</p>
                <div className="slider-sale">
                    <h2>SALE 50% OFF <br/>
                        MODERN FURNITURE</h2>
                </div>
                <button className="view-more-button">VIEW NOW</button>
            </div>
        </div>
    );
};
