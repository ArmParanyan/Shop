import {useMutation} from "react-query";
import {postRegister} from "../apis/apis";
import {useNavigate} from "react-router-dom";

export const useRegisrtation = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (values: any) => postRegister(values),
        mutationKey: ["mutation registration"],
        onSuccess: () => {
            navigate("/login")
        }
    })
};
