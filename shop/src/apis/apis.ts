import {ICategories, IFeatured, IProducts, IProductsById, IOrders, IOrderItems} from "../interfaces/interfaces";

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

export const getProductsById = async (id: string ) => {
    try {
        const res = await fetch(`http://172.16.16.121:3000/api/v1/products/${id}`)
        return await res.json() as IProductsById;
    } catch (error) {
        throw error
    }
}

export const getFeaturedData = async (id: string) => {
    try {
        const res = await fetch(`http://172.16.16.121:3000/api/v1/products/get/featured/${id}`)
        return await res.json() as IFeatured[];
    } catch (error) {
        throw error
    }
}

export const postRegister = async (values: any) => {
    try {
        values.isAdmin = true
        const response = await fetch('http://172.16.16.121:3000/api/v1/users/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(values),
        });

        return response.json();
    } catch (error) {
        throw error;
    }
}

export const postUser = async (values: any) => {
    try {
        const response = await fetch('http://172.16.16.121:3000/api/v1/users/login', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const data = await response.json();

        localStorage.setItem("token", JSON.stringify(data));
    } catch (error) {
        throw error;
    }
}


export const postOrders = async (body: IOrders) => {


    const {token} = JSON.parse(localStorage.getItem("token") || "");

    console.log(token);
    console.log(typeof token);

    try {
        const response = await fetch(
            `http://172.16.16.121:3000/api/v1/orders`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({orderItems: body}),


            });

        const json = await response.json();

        return json as IOrders;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const getOrders = async () => {
    try {
        const res = await fetch(`http://172.16.16.121:3000/api/v1/orders`)
        return await res.json() as IOrderItems[];
    } catch (error) {
        throw error
    }
}