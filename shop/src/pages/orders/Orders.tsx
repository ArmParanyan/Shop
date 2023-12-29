import {useGetOrders} from "../../hooks/useGetOrders";

export const Orders = () => {

    const {data} = useGetOrders();

    console.log(data);


    return (
        <>
            {
                // data?.map((item) => (

                // ))
            }
        </>
    );
};
