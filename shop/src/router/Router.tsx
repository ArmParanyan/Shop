import {createBrowserRouter, Navigate} from "react-router-dom";
import {Home} from "../pages/home/Home";
import Navigation from "../components/header/navigation/Navigation";

import {Store} from "../pages/store/Store";
import {Brand} from "../pages/brand/Brand";
import {PageNav} from "../pages/pageNav/PageNav";
import {About} from "../pages/about/About";
import {News} from "../pages/news/News";
import {Contact} from "../pages/contact/Contact";
import React from "react";
import {Cart} from "../pages/cart/Cart";
import {PageNotFound} from "../pages/pageNotFound/PageNotFound";
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import Login from "../pages/login/Login";
import Registration from "../pages/registeration/Registration";
import {Categories} from "../pages/categories/Categories";
import StoreProducts from "../components/storeProducts/StoreProducts";
import Products from "../pages/products/Products";
import {Orders} from "../pages/orders/Orders";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header/>
                <Navigation/>
                <Footer/>
            </>
        ),
        children: [
            {
                index: true,
                element: <Navigate to={"/home"} replace/>,
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/store",
                element: <Store/>,

            },
            {
                path: "store/:id",
                element: <StoreProducts />
            },
            {
              path: "products/:id",
              element:   <Products/>
            },

            {
                path: "/categories",
                element: <Categories />
            },
            {
                path: "/brand",
                element: <Brand/>
            },
            {
                path: "/pages",
                element: <PageNav/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/news",
                element: <News/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/shopping_cart",
                element: <Cart/>
            },

            {
                path: "/orders",
                element: <Orders />
            },
        ]

    },
    {
        path: "/login",
        element:(
            <>
                <Login/>
                <Footer/>
            </>
        )
    },
    {
        path: "/register",
        element: (
            <>
                <Registration/>
                <Footer/>
            </>
        )
    },
    {
        path: "*",
        element: <PageNotFound/>
    },
])