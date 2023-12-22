import {useQuery} from "react-query";
import { getProducts} from "../apis/apis";

export const useGetProducts = (id: string) => {


    return useQuery({
        queryKey: ["products key", id],
        queryFn: () => {
            return getProducts() ;
        }
    })
};
