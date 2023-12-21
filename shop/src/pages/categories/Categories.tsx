import {useEffect, useState} from "react";
import {useGetCategories} from "../../hooks/useGetCategories";

export const Categories = () => {

    const [id, setId] = useState<string>("");

    const {data} = useGetCategories(id);

    useEffect(() => {
        if (data && data.length > 0) {
            setId(data[0].name);
        }
    }, [data]);

    <CategoriesMenu />

    return (
        <div>


        </div>
    );
};
