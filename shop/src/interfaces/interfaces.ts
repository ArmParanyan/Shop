export interface ICategories {
    _id: string,
    name: string,
    icon: string,
    color: string,
}

export interface IProducts {
    _id: string,
    id: string,
    name: string,
    image: string,
    rating: number,
    price: string,
    category: ICategories;
}


export interface IProductsById {
    id: string;
    image: string;
    name: string;
    description: string;
    richDescription: string;
    price: string;
    images: string[];
    countInStock: number;
    category: ICategories;
    quantity: number;
}

export interface IFeatured {
    image: string;
    id: string;
}


export interface IApiResult {
    data: IProductsById[];
}

export interface IRegistrationUser {
    name: string,
    email: string,
    password: string,
    phone: string,
    street: string,
    apartment: string,
    zip: string,
    city: string,
    country: string,
}



export interface IOrderItems {
    quantity: number | string,
    product: string
}

export interface IOrders {
    orderItems: IOrderItems[];
    shippingAddress1: string,
    shippingAddress2: string,
    city: string
    zip: string,
    country: string,
    phone: string,
    user: string
}
