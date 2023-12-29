import React, {FC, useState} from "react";
import {useAtom} from "jotai/index";
import {countAtom, totalPrice} from "../../atom/cartAtom";

interface IDeleteButtonProps {
    id: string;
    handleRemoveItem: Function,
}

export const DeleteButton:FC<IDeleteButtonProps> = ({id, handleRemoveItem}) => {







    return (
        <>
            <div style={{ paddingLeft: "40px" }} onClick={() =>{
                let a = localStorage.getItem("selectedProduct")
                const data:any[] = JSON.parse(a as string)
                data.filter((elem) => elem.id !== id)

                handleRemoveItem(id)
            }}>
                <img src="/assets/images/delete.svg" alt="" />
            </div>
        </>
    );
};
