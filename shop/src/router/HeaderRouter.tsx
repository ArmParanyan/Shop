import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home/Home";
import Navigation from "../components/header/navigation/Navigation";

import {Store} from "../pages/store/Store";
import {Categories} from "../pages/categories/Categories";
import {Brand} from "../pages/brand/Brand";
import {PageNav} from "../pages/pageNav/PageNav";
import {About} from "../pages/about/About";
import {News} from "../pages/news/News";
import {Contact} from "../pages/contact/Contact";
import Search from "../components/header/search/Search";
import React from "react";
import {Cart} from "../pages/cart/Cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigation/>,
        children: [
            {
                index: true,
                // path: "/home",
                element: <Home/>,
            },
            {
                path: "/store",
                element: <Store/>
            },
            {
                path: "/categories",
                element: <Categories/>
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
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/orders",
                element: <Cart />
            },
        ]
    },


])