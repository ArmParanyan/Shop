import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/HeaderRouter";
import {Footer} from "./components/footer/Footer";
import {Slider} from "./components/slider/Slider";
import Supports from "./components/supports/Supports";

function App() {
    return (
        <div>

            <Header/>
            <RouterProvider router={router}/>
            <Supports />

            <Slider />
            <Footer/>
        </div>
    );
}

export default App;
