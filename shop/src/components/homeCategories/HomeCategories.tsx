import {useGetCategories} from "../../hooks/useGetCategories";
import {ICategories} from "../../interfaces/interfaces";
import {useEffect, useState} from "react";

import "./HomeCategories.scss"
import {useNavigate} from "react-router-dom";

export const HomeCategories = () => {

    const navigate = useNavigate();

    const handleCatagoryClick = () => {
        navigate("/categories")
    }

    const [id, setId] = useState<string>("");

    const {data} = useGetCategories(id);

    useEffect(() => {
        if (data && data.length > 0) {
            setId(data[0].name);
        }
    }, [data]);

    return (
        <div className="home-category-wrapper">
            <ul>
                {data &&
                    data.map((item: ICategories, index: number) => {

                        return (
                            <div key={index} onClick={() => handleCatagoryClick()}>
                                {/*<li >{item.name}</li>*/}
                                <img  src={item.icon} alt=""/>
                            </div>
                        );

                    })}
            </ul>
        </div>
    );
};
