import {useQuery} from "react-query";
import {getFeaturedData} from "../apis/apis";

export const useGetFeaturedData = (id: string) => {
    return useQuery({
        queryKey: ["featured key", id],
        queryFn: () => {
            return getFeaturedData(id)  ;
        },
        enabled: id != null || id !== "null"
    })
};
