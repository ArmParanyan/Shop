import {ICategories, IProducts} from "../interfaces/interfaces";

export const getCategories = async () => {

   try {
    const res = await fetch("http://172.16.16.121:3000/api/v1/categories");
    return await res.json() as ICategories[];

   } catch (error) {
       throw error;
   }
}

export const getProducts = async () => {
    try {
        const res = await fetch("http://172.16.16.121:3000/api/v1/products");
        return await res.json() as IProducts[]
    } catch (error) {
        throw error;
    }
}