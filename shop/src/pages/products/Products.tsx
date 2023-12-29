import React, {Fragment, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useGetProductByID} from '../../hooks/useGetProductByID';

import {useAtom} from "jotai"
import {countAtom} from "../../atom/cartAtom";
import {idAtom} from "../../atom/cartAtom"
import {useGetProducts} from "../../hooks/useGetProducts";
import {CarouselSlider} from "../../components/carouselSlider/CarouselSlider";


import "./Products.scss"




const ProductDetails = () => {

    const {id} = useParams();
    const [productsId, setProductsId] = useState<string>('');
    const {data} = useGetProductByID(id as string);
    const navigate = useNavigate();
    const {data: productsData} = useGetProducts(productsId);

    const [select, setSelect] = useState<number[]>([]);

    const [count, setCount] = useAtom(countAtom);
    const [selectedID, setSelectedID] = useAtom(idAtom);




    useEffect(() => {
        if (data && data.countInStock) {
            setSelect([...Array(data.countInStock)])
        }


    }, [data]);


    const handleCountChange = (target: any) => {
        let value = target.value
        setCount(Number(value));
        localStorage.setItem("count", JSON.stringify(value))
    }





    useEffect(() => {
        if (productsData && productsData.length > 0) {
            setProductsId(productsData[0].name);
        }
    }, [productsData, setProductsId]);

    const filteredDataForSlider =
        productsData &&
        productsData.filter((item) => item.category._id === data?.category._id);

    const handleAddToCart = () => {
        if (data && id) {

            let oldData = localStorage.getItem("selectedProduct");

            localStorage.setItem("selectedProduct", JSON.stringify(oldData ? [...JSON.parse(oldData),data] : [data]));
            localStorage.setItem("selectedProductId", id);
        }
        navigate('/shopping_cart');
    };


    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        if (data && data.images.length !== 0) {
            setImages(JSON.parse(data?.images as any))
        }
    }, [data, setImages]);




    return (
        <>
            <div className="products-by-id-wrapper">
                <div className="products-main-part">


                    <div className="products-images-wrapper">
                        {data?.images && data.images.length !== 0 ? (
                            images?.map((item, index) => (
                                <div className="product-images" key={index}>
                                    <img src={item} alt="failed to load image" style={{
                                        width: "416px",
                                        height: "572px",
                                    }}/>
                                </div>
                            ))
                        ) : (
                            <img
                                src={data?.image}
                                alt=""
                                style={{
                                    width: "848px",
                                    height: "586px",
                                }}
                            />
                        )}

                    </div>
                    <div className="products-details-wrapper">
                        <div className="products-details">
                            <p className="products-name">{data?.name}</p>
                            <p className="products-price">{data?.price}$</p>
                            <p className="products-description">{data?.description}</p>
                            <img src={data?.image} alt="" style={{
                                width: "52px",
                                height: "72px",
                            }}/>
                        </div>

                        <div className="products-count-input">
                            <select name="count" id="count" onChange={({target}) => handleCountChange(target)}>
                                {

                                    select.map((_, index) => (
                                        <Fragment key={index}>
                                            <option value={index + 1}>{index + 1}</option>
                                        </Fragment>
                                    ))
                                }
                            </select>


                            <button className="add-to-cart-button" onClick={handleAddToCart}>ADD TO CART</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="products-Details">
                <p>Details</p>
                <p>{data?.richDescription}</p>
                <p>{data?.description}</p>
                <p>Art. No. — 0643448004</p>
            </div>

            {!!filteredDataForSlider && <CarouselSlider data={filteredDataForSlider} type={"IProducts"}/>}

        </>
    );
};


export default ProductDetails;