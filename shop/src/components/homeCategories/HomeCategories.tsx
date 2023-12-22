import {useGetCategories} from "../../hooks/useGetCategories";
import {ICategories} from "../../interfaces/interfaces";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import "./HomeCategories.scss"

export const HomeCategories = () => {

    const navigate = useNavigate();

    const handleCatagoryClick = (where: string) => {
        navigate(`/store/${where}`)
    }

    const [id, setId] = useState<string>("");

    const {data} = useGetCategories(id);

    useEffect(() => {
        if (data && data.length > 0) {
            setId(data[0].name);
        }
    }, [data]);

    if (data)
    console.log(data[0]._id);

    return (
        <div className="home-category-wrapper">
            <ul>
                {data &&
                    data.map((item: ICategories, index: number) => {

                        return (
                            <div className="home-category-icons" key={index} onClick={() => handleCatagoryClick(item._id)}> {/*navigate to /:id on click TODO */}
                                {/*<li >{item.name}</li>*/}
                                <img  src={item.icon} alt=""/>
                                <li >{item.name}</li>

                            </div>
                        );

                    })}
            </ul>
        </div>
    );
};
