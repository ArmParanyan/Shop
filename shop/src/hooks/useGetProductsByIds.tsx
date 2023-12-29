import {getProductsById} from "../apis/apis";
import {IProductsById} from "../interfaces/interfaces";
import {useQuery} from "react-query";




export const  useQueryGetProducts = (ids:string[]) => {
    return useQuery({
        queryKey:["useQueryGetProducts",ids],
        queryFn:() => {
            return (ids.map((id) => getProductsById(id)));
        },
        enabled: !!ids?.length
    })
}