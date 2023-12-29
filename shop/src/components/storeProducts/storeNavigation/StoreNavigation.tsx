import {NavLink, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useGetCategories} from "../../../hooks/useGetCategories";
import {ICategories} from "../../../interfaces/interfaces";

import "./StoreNavigation.scss"

const StoreNavigation = () => {

    const navigate = useNavigate();



    const [id, setId] = useState<string>("");

    const {data} = useGetCategories(id);

    useEffect(() => {
        if (data && data.length > 0) {
            setId(data[0].name);
        }
    }, [data]);

    return (
        <div className="store-navigation-wrapper">
            <p>Categories</p>
            <nav>
                <ul>
                    {data?.map((item: ICategories, index: number) => (
                        <div key={index}>
                            <NavLink className="store-navigation-links" to={`/store/${item._id}`}>{item.name}</NavLink>
                        </div>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default StoreNavigation;