import {useQuery} from "react-query";
import {getProductsById} from "../apis/apis";

export const useGetCategoriesById = (id: string) => {

    return useQuery({
        queryKey: ["categories by id key", id],
        queryFn: () => {
            return getProductsById(id)  ;
        },
        enabled: id != null || id !== "null"

    })
};
