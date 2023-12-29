import {useQuery} from "react-query";
import {getCategories} from "../apis/apis";

export const useGetCategories = (id: string) => {


    return useQuery({
        queryKey: ["query key", id],
        queryFn: () => {
            return getCategories() ;
        },
        enabled: id != null || id !== "null"
    })
};
