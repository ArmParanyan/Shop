import {useQuery} from "react-query";
import {getOrders} from "../apis/apis";

export const useGetOrders = () => {
    return useQuery({
        queryKey: ["get orders"],
        queryFn: () => getOrders(),
    })
};
