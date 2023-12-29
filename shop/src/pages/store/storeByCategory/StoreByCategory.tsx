import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useGetProducts} from "../../../hooks/useGetProducts";
import StarRating from "../../../components/starRating/StarRating";

import "./StoreByCategories.scss"

export const StoreByCategory = () => {

    const {id} = useParams();

    const [productsId, setProductsId] = useState<string>("");

    const {data: productsData} = useGetProducts(productsId);

    const navigate = useNavigate();

    useEffect(() => {
        if (productsData && productsData.length > 0) {
            setProductsId(productsData[0].name);
        }
    }, [productsData, setProductsId]);


    const filteredProducts = productsData && productsData.filter((item) => item.category._id === id);

    const title = filteredProducts?.map((item) =>  item.category.name)

    console.log(title)

    const handleClick = (id: string) => {
        navigate(`/products/${id}`);
    }

    const isEmpty = filteredProducts?.length === 0;


    return (
        <div className="filtered-products-wrapper">
            <h2 >{title ? title[0] : null}</h2>
            <div className="filtered-products-part">
                {!isEmpty ? filteredProducts?.map((item, index) => (

                        <div key={index} className="filtered-products" onClick={() => handleClick(item._id)}>


                            <img src={item.image} alt=""/>
                            <li>{item.name}</li>
                            <StarRating initialRating={Number(item.rating)}/>
                            <li>{item.price}$</li>


                        </div>
                    )
                ) : <p>Empty</p>
                }

            </div>

        </div>
    )
        ;
};
