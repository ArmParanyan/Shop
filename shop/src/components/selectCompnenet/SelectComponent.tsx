import React, { ChangeEvent, FC, Fragment, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { countAtom, totalPrice } from "../../atom/cartAtom";

interface ISelectComponentProps {
    countInStock: number;
    productId: string; // Unique identifier for each product
    price: number;
    setTotalSum: Function,
}

export const SelectComponent: FC<ISelectComponentProps> = ({ countInStock, productId, setTotalSum }) => {
    const [select, setSelect] = useState<number[]>([]);
    const [count, setCount] = useAtom(countAtom);
    const [selectCount, setSelectCount] = useState(1);
    const [totalAmount, setTotalAmount] = useAtom(totalPrice);

    const selectedElemnts = JSON.parse(localStorage.getItem("selectedProduct") || "[]");

    useEffect(() => {
        const selectedDataInLocalStorage = localStorage.getItem(`productData_${productId}`);
        if (selectedDataInLocalStorage) {
            const  count = JSON.parse(selectedDataInLocalStorage);

            setCount(count);
            setSelectCount(count);

        } else {
            localStorage.setItem(`productData_${productId}`, JSON.stringify(count));
        }

        // Create an array with countInStock elements
        setSelect([...Array(countInStock)]);

        selectedElemnts.filter((item: any) => (
            item.id === productId ?
                item.quantity = selectedDataInLocalStorage  : undefined
        ) )

        // setTotalAmount(selectedElemnts)
        localStorage.setItem("selectedProduct", JSON.stringify(selectedElemnts));


    }, [productId, countInStock, setCount]);


    useEffect(() => {
        const selectedElemnts = JSON.parse(localStorage.getItem("selectedProduct") || "[]");
        const sum = selectedElemnts.map((item: any) => +item.quantity * item.price);

        setTotalSum(sum.reduce((acc: number, currentValue: number) => acc + currentValue, 0));
    }, [selectCount]);

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newSelectCount = Number(event.target.value);
        // Update the local state and local storage with the new count
        setSelectCount(newSelectCount);
        setCount(newSelectCount);
        localStorage.setItem(`productData_${productId}`, JSON.stringify(newSelectCount));

        selectedElemnts.filter((item: any) => (
            item.id === productId ?
                item.quantity = newSelectCount  : undefined
        ) )


        localStorage.setItem("selectedProduct", JSON.stringify(selectedElemnts));

    };

    return (
        <>
            <select
                name="stock-count"
                id="stock-count"
                value={selectCount}
                onChange={handleSelectChange}
            >
                {select.map((_, index) => (
                    <Fragment key={index}>
                        <option value={index + 1}>{index + 1}</option>
                    </Fragment>
                ))}
            </select>
        </>
    );
};