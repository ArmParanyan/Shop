import {useQuery} from "react-query";
import {getProductsById} from "../apis/apis";

export const useGetProductByID = (id: string) => {


    return useQuery({
        queryKey: ["products by id key", id],
        queryFn: () => {
            return getProductsById(id);
        },
        enabled: id != null || id !== "null"
    })
};
