import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useGetCategories} from "../../../hooks/useGetCategories";
import {ICategories} from "../../../interfaces/interfaces";


const StoreNavigation = () => {

    const navigate = useNavigate();

    const handleCatagoryClick = () => {
        navigate("/store")
    }

    const [id, setId] = useState<string>("");

    const {data} = useGetCategories(id);

    useEffect(() => {
        if (data && data.length > 0) {
            setId(data[0].name);
        }
    }, [data]);

    return (
        <>
            <p>Categories</p>
            <nav>
                <ul>
                    {data?.map((item: ICategories, index: number) => (
                        <div>
                            <Link key={index} to={""}>{item.name}</Link>
                        </div>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default StoreNavigation;