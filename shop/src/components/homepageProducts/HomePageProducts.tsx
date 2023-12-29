import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useGetProducts} from "../../hooks/useGetProducts";
import {IProducts} from "../../interfaces/interfaces";
import StarRating from "../starRating/StarRating";

import "./HomePageProducts.scss"


const HomePageProducts = () => {

    const navigate = useNavigate();

    const handleCatagoryClick = () => {
        navigate("/categories")
    }

    const [id, setId] = useState<string>("");

    const {data} = useGetProducts(id);

    useEffect(() => {
        if (data && data.length > 0) {
            setId(data[0].name);
        }
    }, [data]);



    return (
        <div className="home-page-products">
            <ul>
                {data?.map((item: IProducts, index: number) => {
                    return (
                        <div className="products-part" key={index} onClick={() => navigate(`/products/${item._id}`)}>
                            <img style={{
                                height: "308px",
                                width: "198px",
                            }} src={item.image} alt=""/>

                            <div>
                                <p>{item.name}</p>
                                <StarRating initialRating={Number(item.rating)} />
                                <p>{item.price}$</p>
                            </div>
                        </div>
                    )
                })}
            </ul>

            {/*<button>LOAD MORE</button>*/}
        </div>
    );
}

export default HomePageProducts;