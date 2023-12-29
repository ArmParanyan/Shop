import {useMutation} from "react-query";
import {postOrders} from "../apis/apis";

export const usePostOrders = () => {
    return useMutation({
        mutationFn: (body: any) => postOrders(body),
        mutationKey: ["post orders"],
    });
};
