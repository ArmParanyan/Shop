import { IFeatured, IProducts } from "../../interfaces/interfaces";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import "./CarouselSLider.scss";


export const CarouselSlider = ({ data, type }: { data: IProducts[] | IFeatured[], type: string }) => {
    const [slidesToShow, setSlidesToShow] = useState<number>(1);

    const navigate = useNavigate();



    useEffect(() => {
        // Calculate the number of slides to show based on the number of images
        const imagesCount = data.filter((item) => item.image).length;
        const calculatedSlidesToShow = imagesCount > 1 ? imagesCount - 1 : 1;

        setSlidesToShow(calculatedSlidesToShow);
    }, [data]);

    // Check if data is IFeatured[]
    const isFeatured = Array.isArray(data) && data.length > 0 && "category" in data[0];


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: type === "IFeatured" ? 4 : slidesToShow,
        slidesToScroll: 1,
    };

    return (
        <>
            <p className="simular-products">Also You May Like</p>

            <div className="carousel-slider-wrapper">
                <div className="carousel-slider-main-part">
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(`/products/${item.id}`)}
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    style={{
                                        width: "306px",
                                        height: "365px",
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};
