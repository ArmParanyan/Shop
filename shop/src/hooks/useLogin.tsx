import {useMutation} from "react-query";
import {postUser} from "../apis/apis";
import {useNavigate} from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (values: any) => postUser(values),
        mutationKey: ["mutation login"],
        onSuccess: () => {
            navigate("/home")
        }
    })
};
